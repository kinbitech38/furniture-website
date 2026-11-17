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

> ### ℹ️ Quick Note on "npm warn deprecated" Warnings:
> During `npm install`, you might see some yellow text containing statements like `npm warn deprecated node-domexception@1.0.0...`. 
> * **Do not worry! This is completely normal and is NOT an error.** 
> * It is just a warning that some underlying third-party packages are using older library naming conventions. Your installation has still succeeded successfully. You can safely ignore these warnings.

> ### ⚠️ Windows PowerShell "UnauthorizedAccess/SecurityError" Fix:
> If you get an error saying `npm.ps1 cannot be loaded because running scripts is disabled on this system`, try one of these solutions:
>
> * **Option A (Simplest, Recommended & Safest)**: Click the dropdown arrow next to the `+` icon in the VS Code Terminal name list, and select **Command Prompt** (cmd). 
>   * *Note on Command Prompt*: If you are using Command Prompt, you do NOT need to run `Set-ExecutionPolicy`! (Running it in Command Prompt will give an error saying `'Set-ExecutionPolicy' is not recognized`, which you can ignore). In Command Prompt, simply run `npm install` directly.
> * **Option B (PowerShell Session)**: If your terminal is actually **PowerShell**, run this line inside your current VS Code terminal, then hit Enter:
>   ```powershell
>   Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
>   ```
> * **Option C (Permanent Fix)**: Search for **PowerShell** in the Windows Start menu, right-click, select **Run as Administrator**, and run:
>   ```powershell
>   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
>   ```

### Step 3: Run the Development Server
Once the installation finishes, start the local development server by running:

```bash
npm run dev
```

> ### 🛑 Fix for "'vite' is not recognized as an internal or external command"
> If you see this error when running `npm run dev`, it means **the packages were not successfully installed** (usually because the PowerShell security error blocked the installation from finishing).
>
> **How to fix it:**
> 1. Make sure you applied one of the solutions in the **PowerShell Security Fix** box above (or simply switch your VS Code terminal to **Command Prompt**).
> 2. Run the installation command again:
>    ```bash
>    npm install
>    ```
> 3. Wait for it to complete. You should see a message like `added 150 packages in 10s`.
> 4. Now, try running the web server again:
>    ```bash
>    npm run dev
>    ```

### Step 4: Open in Your Browser
The terminal will display a local address (usually `http://localhost:3000`).
* Press **Ctrl + Click** (or **Cmd + Click** on Mac) on the link in your terminal, or copy and paste it into Google Chrome to view your website live!

> ### 🛑 💡 Important Note: Port 5500 vs Port 3000 (Avoid "Live Server")
> If you are seeing **port 5500** (`http://127.0.0.1:5500` or `http://localhost:5500`), it is because you clicked the VS Code **"Go Live" / Live Server** extension button.
> * **Live Server WILL NOT work** for this React + Vite + TypeScript project. It will display a blank screen or errors because it cannot compile React/TS.
> * Turn off/stop Live Server. Instead, **only open the link shown inside your VS Code terminal window** (`http://localhost:3000`) after running `npm run dev`. Your website is running entirely dynamically on port 3000!

---

## 🔍 Diagnostics: Let's Find & Fix What is Wrong!

If the website is still not working on your computer, check which of these problems matches your situation:

### Scenario A: You see a completely BLANK screen in your web browser
This happens 99% of the time due to one of the following:

> ⭐ **FOUND YOUR EXACT ERROR?** 
> If your browser console says:
> * `Unsafe attempt to load URL file:///C:/Users/... from frame... 'file:' URLs are treated as unique security origins.`
> * `Failed to load resource: net::ERR_FAILED`
> 
> **Why it happens:** This means you opened the `index.html` file by double-clicking it directly in Windows File Explorer. Chrome blocks React and javascript modules from launching when opened as a static file (`file:///...`).
> **Perfect Fix:**
> 1. Close that browser tab!
> 2. Open VS Code, open the built-in Terminal.
> 3. Make sure you ran `npm install` successfully first, then type `npm run dev` and press Enter.
> 4. Go to **`http://localhost:3000`** in Chrome instead.

1. **You opened `index.html` directly**: If your browser address bar says `file:///C:/.../index.html`, Chrome will block the files for security reasons (giving a blank page). 
   * **Fix**: You *must* open the terminal in VS Code, run `npm run dev`, and navigate to `http://localhost:3000`.
2. **You used VS Code Live Server (Port 5500)**: If your browser address bar says `http://127.0.0.1:5500` or `localhost:5500`, it will be blank.
   * **Fix**: Stop "Live Server" entirely, and only use `http://localhost:3000`.
3. **Chrome's Console shows a Red error**: If you opened `http://localhost:3000` and it is blank, there is a hidden Javascript/React error.
   * **How to find it**: Right-click anywhere on the blank page, select **Inspect** (or press `F12`), and click on the **Console** tab at the top of the inspect panel.
   * **Look for red error text** (e.g., `Uncaught ReferenceError`, `Failed to load resource`, etc.). 
   * **Fix based on error**:
     * If you see caching errors, try a **Hard Refresh** by pressing `Ctrl + F5` (or `Cmd + Shift + R` on Mac).
     * If you see package/import errors, stop your terminal (`Ctrl + C`) and run `npm run dev -- --force` to force-clear Vite's cache.
     * Copy and paste any other red error message back to the AI Studio chat so we can tell you *exactly* how to fix it!

### Scenario B: You run `npm run dev` and get a terminal/overlay error
If you try to run the server but get a compilation or console style error:
1. **Did you get a "Cannot apply unknown utility class `lg:px-12`" error?**
   * **Why it happened**: Tailwind CSS v4 (the brand new major release) handles native CSS `@apply` rules strictly, and does not allow combining responsive variant modifiers like `lg:` inside a direct class apply declaration.
   * **Fix**: This has been pre-fixed in your code! We decoupled the responsive screen layouts by moving the custom styles into native CSS `@media (min-width: 1024px)` blocks in `/src/index.css`. It now builds flawlessly.
2. **Did `npm install` finish successfully?** Check if you have a folder called `node_modules` inside your project folder. If that folder is missing or mostly empty, the packages have not been installed yet.
   * **Fix**: Ensure your VS Code terminal is set to **Command Prompt** (not PowerShell), run `npm install`, and wait a minute until the prompt returns safely.
3. **Is another application using Port 3000?** If the server says `port 3000 is in use, using another port instead...`
   * **Fix**: Look closely at the terminal output to see if it says `http://localhost:3001` or some other port instead, and try opening that new link.

### Scenario C: Command Prompt vs PowerShell confusion
If you got the error `'Set-ExecutionPolicy' is not recognized as an internal or external command`, it means you tried running PowerShell commands inside a standard Command Prompt (`cmd`).
* **Fix**: You do **NOT** need to run `Set-ExecutionPolicy` if you are using Command Prompt! Just run `npm install` and then `npm run dev`. Everything will work out-of-the-box in `cmd`.

---

## Tech Stack
* **Framework**: React 19 (TypeScript)
* **Build Tool**: Vite 6
* **Styling**: Tailwind CSS v4
* **Animations**: Motion (formerly Framer Motion)
* **Icons**: Lucide-React
* **Creator Credits**: Developed by **Kinbi Tech** and edited/designed on Google AI Studio.
