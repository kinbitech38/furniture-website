import React, { useState } from 'react';
import { Plus, X, Upload, ExternalLink, FolderClosed, FolderOpen, FileVideo, Play, Calendar, Image as ImageIcon, Sparkles, RefreshCw, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_PROJECTS, Project } from '../data/portfolio';
import { INITIAL_VIDEOS } from '../data/videos';
import { CategoryVideo } from '../types';

// Extract poster frame from video source locally using a hidden canvas
const extractVideoFrame = (fileOrUrl: File | string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.autoplay = false;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = 'anonymous';

    const url = typeof fileOrUrl === 'string' ? fileOrUrl : URL.createObjectURL(fileOrUrl);
    video.src = url;

    const timeout = setTimeout(() => {
      video.onseeked = null;
      video.onerror = null;
      reject(new Error('Extraction timed out'));
    }, 6000);

    video.onloadedmetadata = () => {
      // Seek to 0.8 seconds (or middle of video) to skip black intro frame
      video.currentTime = Math.min(0.8, video.duration / 2);
    };

    video.onseeked = () => {
      clearTimeout(timeout);
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
          resolve(dataUrl);
        } else {
          reject(new Error('Failed to get 2d context'));
        }
      } catch (err) {
        reject(err);
      }
    };

    video.onerror = () => {
      clearTimeout(timeout);
      reject(new Error('Failed to load video source for extraction'));
    };
  });
};

export default function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [activeVideoCategory, setActiveVideoCategory] = useState('All');
  const [activeImageCategory, setActiveImageCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    name: '',
    category: 'Chairs',
    year: '2024',
    description: '',
    image: ''
  });

  const [videos, setVideos] = useState<CategoryVideo[]>(() => {
    const saved = localStorage.getItem('category_videos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved videos", e);
      }
    }
    return INITIAL_VIDEOS;
  });

  const saveVideos = (newVideos: CategoryVideo[]) => {
    setVideos(newVideos);
    localStorage.setItem('category_videos', JSON.stringify(newVideos));
  };

  const [selectedFolderCat, setSelectedFolderCat] = useState<string | null>(null);
  const [videoToPlay, setVideoToPlay] = useState<CategoryVideo | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  // Upload Form inside Folder states
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newVideoDesc, setNewVideoDesc] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Wallpaper customization states
  const [extractedWallpaper, setExtractedWallpaper] = useState<string | null>(null);
  const [customWallpaperFile, setCustomWallpaperFile] = useState<File | null>(null);
  const [customWallpaperPreviewUrl, setCustomWallpaperPreviewUrl] = useState<string | null>(null);
  const [customWallpaperUrl, setCustomWallpaperUrl] = useState('');
  const [isExtractingWallpaper, setIsExtractingWallpaper] = useState(false);
  const [wallpaperMode, setWallpaperMode] = useState<'auto' | 'custom' | 'url'>('auto');

  // Sync automatic wallpaper capture on video selection
  React.useEffect(() => {
    let active = true;
    if (videoFile) {
      setIsExtractingWallpaper(true);
      setExtractedWallpaper(null);
      extractVideoFrame(videoFile)
        .then((dataUri) => {
          if (active) setExtractedWallpaper(dataUri);
        })
        .catch((err) => {
          console.warn("Could not capture video frame:", err);
        })
        .finally(() => {
          if (active) setIsExtractingWallpaper(false);
        });
    } else if (newVideoUrl && newVideoUrl.startsWith('http')) {
      setIsExtractingWallpaper(true);
      setExtractedWallpaper(null);
      extractVideoFrame(newVideoUrl)
        .then((dataUri) => {
          if (active) setExtractedWallpaper(dataUri);
        })
        .catch((err) => {
          console.warn("Could not capture external video frame:", err);
        })
        .finally(() => {
          if (active) setIsExtractingWallpaper(false);
        });
    } else {
      setExtractedWallpaper(null);
    }
    return () => {
      active = false;
    };
  }, [videoFile, newVideoUrl]);

  const handleWallpaperFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setCustomWallpaperFile(file);
        if (customWallpaperPreviewUrl) {
          URL.revokeObjectURL(customWallpaperPreviewUrl);
        }
        setCustomWallpaperPreviewUrl(URL.createObjectURL(file));
      } else {
        alert('Please select a valid image file for the wallpaper.');
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        setVideoFile(file);
        setNewVideoTitle(file.name.split('.')[0] || 'My Video');
      } else {
        alert('Please drop a valid video file.');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('video/')) {
        setVideoFile(file);
        setNewVideoTitle(file.name.split('.')[0] || 'My Video');
      } else {
        alert('Please select a valid video file.');
      }
    }
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideoTitle || (!videoFile && !newVideoUrl)) return;

    let finalUrl = newVideoUrl;
    let sizeStr = '1.5 MB';

    if (videoFile) {
      finalUrl = URL.createObjectURL(videoFile);
      sizeStr = `${(videoFile.size / (1024 * 1024)).toFixed(1)} MB`;
    }

    let finalWallpaperUrl = '';
    if (wallpaperMode === 'auto' && extractedWallpaper) {
      finalWallpaperUrl = extractedWallpaper;
    } else if (wallpaperMode === 'custom' && customWallpaperPreviewUrl) {
      finalWallpaperUrl = customWallpaperPreviewUrl;
    } else if (wallpaperMode === 'url' && customWallpaperUrl) {
      finalWallpaperUrl = customWallpaperUrl;
    }

    if (!finalWallpaperUrl) {
      // High quality interior placeholder fallback
      finalWallpaperUrl = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop';
    }

    const newVid: CategoryVideo = {
      id: `vid-${Date.now()}`,
      title: newVideoTitle,
      description: newVideoDesc || 'An artisan preview clip.',
      videoUrl: finalUrl,
      thumbnailUrl: finalWallpaperUrl,
      category: selectedFolderCat!,
      uploadedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fileSize: sizeStr
    };

    const updated = [newVid, ...videos];
    saveVideos(updated);

    // Reset Form
    setNewVideoTitle('');
    setNewVideoDesc('');
    setNewVideoUrl('');
    setVideoFile(null);
    setExtractedWallpaper(null);
    setCustomWallpaperFile(null);
    if (customWallpaperPreviewUrl) {
      URL.revokeObjectURL(customWallpaperPreviewUrl);
    }
    setCustomWallpaperPreviewUrl(null);
    setCustomWallpaperUrl('');
    setWallpaperMode('auto');
  };

  const categories = [
    'All', 
    'TV Console', 
    'Bed Console', 
    'Sofa', 
    'Chairs', 
    'Bedframes', 
    'HDF Flush Door', 
    'Heavy Duty Wooden Door', 
    'Dining Sets', 
    'Wardrobes', 
    'Kitchen Cabinet', 
    'Dressing Mirror'
  ];

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name || !newProject.image) return;
    
    const project: Project = {
      ...(newProject as Project),
      id: Math.random().toString(36).substr(2, 9),
    };
    
    setProjects([project, ...projects]);
    setIsModalOpen(false);
    setNewProject({ name: '', category: 'Chairs', year: '2024', description: '', image: '' });
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-bg-secondary" id="portfolio">
      <div className="container-custom">
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-green mb-2 block">Curated Works</span>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 text-text-primary">Portfolio</h2>
          <p className="text-text-secondary text-xs sm:text-sm opacity-80">Architectural solutions for modern living and workspace environments.</p>
        </div>

        {/* --- LIVE FURNITURE SHOWROOM VIDEOS --- */}
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-brand-green rounded-full shrink-0" />
              <h3 className="heading-serif text-xl sm:text-2xl font-bold tracking-wider text-text-primary">VIDEO</h3>
            </div>

            {/* Category Selector List for Video Showcase */}
            <div className="flex overflow-x-auto items-center gap-2 pb-2 md:pb-0 scrollbar-hide py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveVideoCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all shrink-0 cursor-pointer ${
                    activeVideoCategory === cat
                      ? 'bg-brand-green text-white shadow-sm'
                      : 'bg-white hover:bg-gray-50 text-text-secondary border border-gray-200/80 hover:border-brand-green/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className={`grid gap-3.5 sm:gap-4 lg:gap-5 ${activeVideoCategory === 'All' ? 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 max-w-lg'}`}>
            {categories
              .filter(cat => cat !== 'All')
              .filter(cat => activeVideoCategory === 'All' || cat === activeVideoCategory)
              .map((cat) => {
                return (
                  <motion.div
                    key={cat}
                    onClick={() => setSelectedFolderCat(cat)}
                    className="relative group cursor-pointer"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  >
                    {/* Architectural Category Tile */}
                    <div className="relative w-full aspect-[1.35/1] bg-white border border-gray-200/80 hover:border-brand-green/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all flex items-center justify-center">
                          <Play size={16} className="fill-current text-current ml-0.5" />
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-serif font-bold text-sm sm:text-base text-text-primary leading-snug group-hover:text-brand-green transition-colors line-clamp-1">{cat}</h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 border-t border-text-primary/10 pt-10 sm:pt-12">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-brand-green rounded-full shrink-0" />
            <h3 className="heading-serif text-xl sm:text-2xl font-bold tracking-wider text-text-primary">IMAGE</h3>
          </div>

          {/* Category Selector List for Image Showcase */}
          <div className="flex overflow-x-auto items-center gap-2 pb-2 md:pb-0 scrollbar-hide py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveImageCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all shrink-0 cursor-pointer ${
                  activeImageCategory === cat
                    ? 'bg-brand-green text-white shadow-sm'
                    : 'bg-white hover:bg-gray-50 text-text-secondary border border-gray-200/80 hover:border-brand-green/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 min-h-[400px]">
          {(activeImageCategory === 'All' ? categories.filter(cat => cat !== 'All') : [activeImageCategory]).map((cat) => {
            const catProjects = projects.filter(p => p.category === cat);
            return (
              <React.Fragment key={cat}>
                <div className="col-span-full border-b border-gray-200/60 pb-3 mb-2 mt-4 sm:mt-6 first:mt-0">
                  <h4 className="heading-serif text-lg sm:text-xl font-bold text-text-primary">{cat}</h4>
                </div>

                {catProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    onClick={() => setPreviewProject(project)}
                    className="group cursor-pointer mb-4 sm:mb-6"
                  >
                    <div className="relative aspect-[4/5] bg-white rounded-2xl sm:rounded-3xl overflow-hidden mb-3 shadow-xs group-hover:shadow-xl transition-all duration-500 border border-gray-100">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 text-brand-green shadow-xl">
                          <Maximize2 size={18} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-baseline justify-between pt-1 px-1">
                      <h3 className="font-serif font-bold text-sm sm:text-base text-text-primary group-hover:text-brand-green transition-colors">{project.name}</h3>
                      <span className="text-[10px] uppercase tracking-wider text-text-secondary/60 font-mono">{project.category}</span>
                    </div>
                  </motion.div>
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Upload Modal (Client-side demo) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-text-primary/50 backdrop-blur-xs"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-[36px] p-5 sm:p-8 lg:p-10 shadow-2xl overflow-y-auto max-h-[92dvh] scrollbar-hide"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 hover:bg-bg-secondary rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <h3 className="heading-serif text-2xl sm:text-3xl mb-6">Add New Project</h3>
              
              <form onSubmit={handleAddProject} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-text-secondary mb-2">Project Name</label>
                  <input 
                    type="text" 
                    required
                    value={newProject.name}
                    onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                    placeholder="E.g. Nordic Lounge"
                    className="w-full px-6 py-4 bg-bg-secondary rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-text-secondary mb-2">Category</label>
                    <select 
                      value={newProject.category}
                      onChange={(e) => setNewProject({...newProject, category: e.target.value as any})}
                      className="w-full px-6 py-4 bg-bg-secondary rounded-2xl text-sm focus:outline-none"
                    >
                      {categories.slice(1).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-text-secondary mb-2">Year</label>
                    <input 
                      type="text" 
                      value={newProject.year}
                      onChange={(e) => setNewProject({...newProject, year: e.target.value})}
                      className="w-full px-6 py-4 bg-bg-secondary rounded-2xl text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-text-secondary mb-2">Image URL (Unsplash)</label>
                  <input 
                    type="url" 
                    required
                    value={newProject.image}
                    onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-6 py-4 bg-bg-secondary rounded-2xl text-sm focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-text-secondary mb-2">Description</label>
                  <textarea 
                    rows={3}
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    placeholder="Briefly describe the project..."
                    className="w-full px-6 py-4 bg-bg-secondary rounded-2xl text-sm focus:outline-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-brand-green text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-lg transition-all"
                >
                  <Upload size={18} />
                  Upload to Portfolio
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SHOWROOM GALLERY VIDEOS MODAL --- */}
      <AnimatePresence>
        {selectedFolderCat && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFolderCat(null)}
              className="absolute inset-0 bg-text-primary/70 backdrop-blur-xs"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-[36px] p-4 sm:p-7 lg:p-9 shadow-3xl overflow-hidden flex flex-col max-h-[92dvh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-5 sm:mb-7 border-b border-gray-100 pb-4 shrink-0">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 bg-brand-green/10 text-brand-green rounded-xl sm:rounded-2xl">
                    <Play size={20} className="fill-brand-green/10 text-brand-green sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase font-sans">Live Showcase Tour</span>
                    <h3 className="heading-serif text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mt-0.5">{selectedFolderCat} Gallery</h3>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedFolderCat(null)}
                  className="p-2 sm:p-2.5 bg-bg-secondary hover:bg-gray-100 text-text-primary rounded-full transition-colors"
                  aria-label="Close showroom gallery"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] min-h-0 scrollbar-hide">
                {/* Left side: Upload list */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-center bg-bg-secondary/60 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-gray-100/50">
                    <span className="text-xs font-bold text-text-primary uppercase tracking-wider">Showroom Clips ({videos.filter(v => v.category === selectedFolderCat).length})</span>
                    <span className="text-[10px] sm:text-[11px] text-text-secondary/70">Tap card to play</span>
                  </div>

                  {videos.filter(v => v.category === selectedFolderCat).length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-gray-100 rounded-3xl bg-bg-secondary/30 text-center">
                      <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-4 animate-pulse">
                        <FileVideo size={28} />
                      </div>
                      <h4 className="font-bold text-text-primary text-base mb-1">Gallery is currently empty</h4>
                      <p className="text-xs text-text-secondary max-w-xs leading-relaxed font-sans">
                        Be the first to upload an mp4 video showcase of our custom {selectedFolderCat.toLowerCase()} designs!
                      </p>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {videos.filter(v => v.category === selectedFolderCat).map((vid) => (
                        <div 
                          key={vid.id}
                          onClick={() => setVideoToPlay(vid)}
                          className="group/item relative cursor-pointer bg-bg-secondary border border-gray-100 hover:border-brand-green/30 rounded-2xl overflow-hidden p-3.5 hover:shadow-md transition-all duration-300"
                        >
                          <div className="aspect-video w-full rounded-xl bg-gray-950/90 relative mb-3 overflow-hidden flex items-center justify-center">
                            {vid.thumbnailUrl ? (
                              <img 
                                src={vid.thumbnailUrl} 
                                alt={vid.title} 
                                className="w-full h-full object-cover opacity-90 group-hover/item:scale-105 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <video src={vid.videoUrl} className="w-full h-full object-cover muted pointer-events-none opacity-80" />
                            )}
                            <div className="absolute inset-0 bg-black/40 group-hover/item:bg-black/20 transition-colors flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-white/95 text-brand-green group-hover/item:scale-110 flex items-center justify-center shadow-lg transition-transform duration-300">
                                <Play size={16} className="fill-brand-green ml-0.5" />
                              </div>
                            </div>
                          </div>
                          
                          <h5 className="font-bold text-xs text-text-primary truncate mb-1 group-hover/item:text-brand-green transition-colors">{vid.title}</h5>
                          <p className="text-[10px] text-text-secondary line-clamp-2 leading-relaxed mb-2.5">{vid.description}</p>
                          
                          <div className="flex items-center justify-between text-[9px] text-text-secondary/50 font-semibold border-t border-gray-100 pt-2 shrink-0">
                            <span className="flex items-center gap-1"><Calendar size={10} /> {vid.uploadedAt}</span>
                            {vid.fileSize && <span>{vid.fileSize}</span>}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if(confirm("Are you sure you want to delete this custom video?")) {
                                saveVideos(videos.filter(v => v.id !== vid.id));
                              }
                            }}
                            className="absolute top-5 right-5 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity z-20 shadow-md hover:bg-red-600"
                            title="Delete video"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right side: Upload video form */}
                <div className="border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-8 flex flex-col font-sans">
                  <div className="bg-brand-green/5 px-5 py-3 rounded-xl border border-brand-green/10 mb-6 shrink-0">
                    <h4 className="font-bold text-xs text-brand-green uppercase tracking-wider mb-0.5">Showroom Video Uploader</h4>
                    <p className="text-[10px] text-brand-green/70">Upload a showroom video file or paste a web video link.</p>
                  </div>

                  <form onSubmit={handleAddVideo} className="space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* File Drag and Drop Zone */}
                      <div>
                        <label className="block text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-2">1. Upload Video File</label>
                        <div 
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          className={`relative flex flex-col items-center justify-center py-6 px-4 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all ${
                            dragActive 
                              ? 'border-brand-green bg-brand-green/5' 
                              : videoFile 
                                ? 'border-brand-green/40 bg-brand-green/5' 
                                : 'border-gray-200 hover:border-brand-green/50 bg-bg-secondary/50'
                          }`}
                        >
                          <input 
                            type="file" 
                            accept="video/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          
                          {videoFile ? (
                            <>
                              <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-2">
                                <FileVideo size={20} />
                              </div>
                              <span className="font-bold text-xs text-text-primary text-center truncate max-w-xs">{videoFile.name}</span>
                              <span className="text-[10px] text-text-secondary mt-1">{(videoFile.size / (1024 * 1024)).toFixed(1)} MB - Click to change file</span>
                            </>
                          ) : (
                            <>
                              <div className="w-10 h-10 rounded-full bg-gray-100 text-text-secondary flex items-center justify-center mb-2">
                                <Upload size={18} />
                              </div>
                              <span className="font-bold text-xs text-text-primary">Drag & drop your mp4 video here</span>
                              <span className="text-[10px] text-text-secondary mt-1">or click to browse files</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="relative flex items-center justify-center text-[10px] text-text-secondary/40 font-bold uppercase py-1 border-b border-gray-100">
                         <span className="bg-white px-3 relative z-10 font-sans">Or use a web video link</span>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-2">Video URL</label>
                        <input 
                          type="url" 
                          value={newVideoUrl}
                          onChange={(e) => {
                            setNewVideoUrl(e.target.value);
                            if (e.target.value) setVideoFile(null);
                          }}
                          disabled={!!videoFile}
                          placeholder="E.g. https://example.com/video.mp4"
                          className="w-full px-5 py-3 bg-bg-secondary rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-green/20 disabled:opacity-50"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1">Video Title</label>
                          <input 
                            type="text" 
                            required
                            value={newVideoTitle}
                            onChange={(e) => setNewVideoTitle(e.target.value)}
                            placeholder="E.g. Nordic Sofa Material Close-up"
                            className="w-full px-5 py-3 bg-bg-secondary rounded-xl text-xs focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1">Brief Description</label>
                          <textarea 
                            rows={2}
                            value={newVideoDesc}
                            onChange={(e) => setNewVideoDesc(e.target.value)}
                            placeholder="Detail wood grains, leather stitching, colors..."
                            className="w-full px-5 py-3 bg-bg-secondary rounded-xl text-xs focus:outline-none resize-none font-sans"
                          />
                        </div>
                      </div>

                      {/* --- VIDEO WALLPAPER DESIGN / POSTER SETTINGS --- */}
                      <div className="border-t border-gray-100/50 pt-4 mt-2">
                        <label className="block text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-2.5 flex items-center justify-between">
                          <span>Video Wallpaper / Preview Poster</span>
                          <span className="text-[9px] font-normal text-brand-green bg-brand-green/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Sparkles size={10} /> Live Selection
                          </span>
                        </label>

                        {/* Mode selectors */}
                        <div className="grid grid-cols-3 gap-1 bg-bg-secondary p-1 rounded-xl mb-3 border border-gray-100/50">
                          <button
                            type="button"
                            onClick={() => setWallpaperMode('auto')}
                            className={`py-1.5 text-[9px] font-bold tracking-wider uppercase rounded-lg transition-all ${
                              wallpaperMode === 'auto'
                                ? 'bg-white text-brand-green shadow-xs'
                                : 'text-text-secondary/60 hover:text-text-primary'
                            }`}
                          >
                            Auto Capture
                          </button>
                          <button
                            type="button"
                            onClick={() => setWallpaperMode('custom')}
                            className={`py-1.5 text-[9px] font-bold tracking-wider uppercase rounded-lg transition-all ${
                              wallpaperMode === 'custom'
                                ? 'bg-white text-brand-green shadow-xs'
                                : 'text-text-secondary/60 hover:text-text-primary'
                            }`}
                          >
                            Upload Photo
                          </button>
                          <button
                            type="button"
                            onClick={() => setWallpaperMode('url')}
                            className={`py-1.5 text-[9px] font-bold tracking-wider uppercase rounded-lg transition-all ${
                              wallpaperMode === 'url'
                                ? 'bg-white text-brand-green shadow-xs'
                                : 'text-text-secondary/60 hover:text-text-primary'
                            }`}
                          >
                            Photo URL
                          </button>
                        </div>

                        {/* Interactive Mode Content */}
                        <div className="space-y-3">
                          {wallpaperMode === 'auto' && (
                            <div className="bg-bg-secondary/50 border border-gray-100 rounded-xl p-3 flex flex-col items-center justify-center min-h-[100px] text-center">
                              {isExtractingWallpaper ? (
                                <div className="flex flex-col items-center gap-2 py-4">
                                  <RefreshCw size={16} className="text-brand-green animate-spin" />
                                  <span className="text-[10px] text-text-secondary font-medium">Auto-capturing video wallpaper...</span>
                                </div>
                              ) : extractedWallpaper ? (
                                <div className="space-y-2 w-full">
                                  <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-black">
                                    <img src={extractedWallpaper} alt="Frame extraction" className="w-full h-full object-cover" />
                                    <span className="absolute bottom-2 left-2 text-[8px] bg-black/60 text-white px-2 py-0.5 rounded font-mono uppercase tracking-widest">Active Wallpaper</span>
                                  </div>
                                  <p className="text-[10px] text-text-secondary/70">Extracted frame from video automatically! This is now set as your video card background.</p>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center text-text-secondary/50 py-4">
                                  <FileVideo size={18} className="mb-1.5 opacity-60" />
                                  <span className="text-[9px] font-bold text-text-primary/70">Awaiting Video Upload / URL</span>
                                  <p className="text-[8px] max-w-[180px] mt-1">We will automatically capture and extract its beautiful wallpaper cover once loaded.</p>
                                </div>
                              )}
                            </div>
                          )}

                          {wallpaperMode === 'custom' && (
                            <div className="space-y-2">
                              {customWallpaperPreviewUrl ? (
                                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-black group/wp">
                                  <img src={customWallpaperPreviewUrl} alt="Custom Wallpaper" className="w-full h-full object-cover" />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setCustomWallpaperFile(null);
                                      setCustomWallpaperPreviewUrl(null);
                                    }}
                                    className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 rounded-full text-white transition-opacity"
                                  >
                                    <X size={10} />
                                  </button>
                                  <span className="absolute bottom-2 left-2 text-[8px] bg-brand-green text-white px-2 py-0.5 rounded font-bold uppercase tracking-widest font-sans">Custom Upload</span>
                                </div>
                              ) : (
                                <div className="relative flex flex-col items-center justify-center py-5 px-3 border border-dashed border-gray-200 rounded-xl bg-bg-secondary/50 text-center cursor-pointer hover:border-brand-green/50 transition-all">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleWallpaperFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                  />
                                  <ImageIcon size={16} className="text-text-secondary mb-1" />
                                  <span className="font-bold text-[10px] text-text-primary">Click to select a beautiful photo</span>
                                  <span className="text-[8px] text-text-secondary mt-0.5">JPG, PNG, WebP up to 10MB</span>
                                </div>
                              )}
                            </div>
                          )}

                          {wallpaperMode === 'url' && (
                            <div className="space-y-2">
                              <input
                                type="url"
                                value={customWallpaperUrl}
                                onChange={(e) => setCustomWallpaperUrl(e.target.value)}
                                placeholder="E.g. https://images.unsplash.com/photo-..."
                                className="w-full px-4 py-2.5 bg-bg-secondary rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-brand-green/20"
                              />
                              {customWallpaperUrl && (
                                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-black">
                                  <img src={customWallpaperUrl} alt="URL cover" className="w-full h-full object-cover animate-fade-in" onError={(e) => {(e.target as HTMLElement).style.display = 'none'}} referrerPolicy="no-referrer" />
                                  <span className="absolute bottom-2 left-2 text-[8px] bg-[#d97706] text-white px-2 py-0.5 rounded font-bold uppercase tracking-widest font-sans">URL Poster</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={!newVideoTitle || (!videoFile && !newVideoUrl)}
                      className="w-full py-4 bg-brand-green hover:bg-brand-green/90 disabled:bg-gray-200 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:shadow-lg transition-all shadow-md shrink-0 mt-4 cursor-pointer"
                    >
                      <Plus size={16} />
                      Add Live Showcase Video
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CINEMA THEATER PLAYER LIGHTBOX --- */}
      <AnimatePresence>
        {videoToPlay && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-2.5 sm:p-4 bg-black/95 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-[#090909] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[96dvh]"
            >
              {/* Top Bar with metadata */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 text-white shrink-0">
                <div className="min-w-0 pr-4">
                  <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase">{videoToPlay.category} Showroom Tour</span>
                  <h4 className="font-bold text-sm sm:text-base md:text-lg mt-0.5 truncate">{videoToPlay.title}</h4>
                </div>
                <button 
                  onClick={() => setVideoToPlay(null)}
                  className="p-2 sm:p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-gray-300 hover:text-white transition-colors shrink-0"
                  aria-label="Close video player"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="aspect-video w-full bg-black relative flex items-center justify-center shrink-0">
                <video 
                  src={videoToPlay.videoUrl} 
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 md:p-8 text-white bg-gradient-to-t from-black to-[#090909] overflow-y-auto">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">{videoToPlay.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-[10px] sm:text-[11px] font-mono text-gray-400 font-sans">
                  <span>Recorded: {videoToPlay.uploadedAt}</span>
                  {videoToPlay.fileSize && <span>File Size: {videoToPlay.fileSize}</span>}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* High-Res Image Preview Lightbox */}
        {previewProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[94dvh]"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-gray-100 shrink-0">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-green uppercase font-mono">{previewProject.category}</span>
                  <h4 className="heading-serif font-bold text-lg sm:text-2xl text-text-primary">{previewProject.name}</h4>
                </div>
                <button 
                  onClick={() => setPreviewProject(null)}
                  className="p-2 sm:p-2.5 bg-gray-100 hover:bg-gray-200 text-text-primary rounded-full transition-colors"
                  aria-label="Close image preview"
                >
                  <X size={18} />
                </button>
              </div>

              {/* High-Res Image Frame */}
              <div className="flex-1 bg-black/5 overflow-hidden flex items-center justify-center p-2 sm:p-4 min-h-0">
                <img 
                  src={previewProject.image} 
                  alt={previewProject.name} 
                  className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-xl shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption & Description */}
              {previewProject.description && (
                <div className="px-5 sm:px-7 py-3.5 sm:py-4 bg-white border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl">
                    {previewProject.description}
                  </p>
                  <span className="text-[11px] font-mono text-text-secondary/60 shrink-0">
                    Bespoke Handcrafted Design
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
