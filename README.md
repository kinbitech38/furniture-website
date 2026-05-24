# furni.portfolio

A modern architectural and interior design portfolio website.

## Local Development Setup

To run this website on your local machine, you need to have **Node.js** installed. The error you encountered (`npm is not recognized...`) means Node.js is not yet installed on your computer, or your terminal needs to be restarted.

Follow these simple steps to set up and run the app:

### Step 1: Install Node.js
1. Go to the official website: [https://nodejs.org/](https://nodejs.org/)
2. Download and install the **LTS (Long Term Support)** version for your operating system (Windows/macOS).
3. Follow the installation wizard and click "Next" until complete. This will automatically install both **Node.js** and **npm** (Node Package Manager).

> **Crucial for Windows Users:** After the installer finishes, **close all open VS Code windows** and re-open VS Code. This allows VS Code to recognize the newly installed `npm` command.

### Step 2: Install Project Dependencies
Open your project folder in VS Code, open the built-in terminal (Press ``Ctrl + ` `` or go to `Terminal` -> `New Terminal`), and run:

```bash
npm install
```

This will download and install all the necessary packages (like React, Vite, Tailwind CSS, and Motion) into a `node_modules` folder.

### Step 3: Run the Development Server
Once the installation finishes, start the local development server by running:

```bash
npm run dev
```

### Step 4: Open in Your Browser
The terminal will display a local address (usually `http://localhost:3000`).
* Press **Ctrl + Click** (or **Cmd + Click** on Mac) on the link in your terminal, or copy and paste it into Google Chrome to view your website live!

---

## Tech Stack
* **Framework**: React 19 (TypeScript)
* **Build Tool**: Vite 6
* **Styling**: Tailwind CSS v4
* **Animations**: Motion (formerly Framer Motion)
* **Icons**: Lucide-React
* **Creator Credits**: Developed by **Kinbi Tech** and edited/designed on Google AI Studio.
