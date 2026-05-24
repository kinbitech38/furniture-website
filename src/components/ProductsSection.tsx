import React, { useState } from 'react';
import { Plus, X, Upload, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_PROJECTS, Project } from '../data/portfolio';

export default function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    name: '',
    category: 'Chairs',
    year: '2024',
    description: '',
    image: ''
  });

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
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
    <section className="py-24 bg-bg-secondary" id="portfolio">
      <div className="container-custom">
        <div className="flex flex-col gap-12 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="heading-serif text-5xl mb-4">Portfolio</h2>
              <p className="text-text-secondary text-sm opacity-60">Architectural solutions for modern living spaces.</p>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-8 py-3.5 bg-text-primary text-white rounded-full text-[11px] font-bold hover:bg-brand-green transition-all hover:shadow-xl active:scale-95 shrink-0 tracking-widest uppercase shadow-lg shadow-text-primary/5"
            >
              <Plus size={16} />
              Add New Project
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-6 border-t border-text-primary/5">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] md:text-[11px] font-bold transition-all duration-300 whitespace-nowrap relative py-1 tracking-[0.2em] uppercase group ${
                  activeCategory === cat 
                    ? 'text-brand-green' 
                    : 'text-text-secondary/50 hover:text-text-primary'
                }`}
              >
                {cat}
                {activeCategory === cat ? (
                  <motion.div 
                    layoutId="category-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                  />
                ) : (
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-text-primary/10 transition-all duration-300 group-hover:w-full rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-white rounded-[32px] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 text-brand-green">
                      <ExternalLink size={24} />
                    </div>
                  </div>

                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-brand-green">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-brand-green transition-colors">{project.name}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed max-w-[200px] mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-brand-green" />
                       <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">{project.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Upload Modal (Client-side demo) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-text-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[40px] p-10 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-bg-secondary rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <h3 className="heading-serif text-3xl mb-8">Add New Project</h3>
              
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
    </section>
  );
}
