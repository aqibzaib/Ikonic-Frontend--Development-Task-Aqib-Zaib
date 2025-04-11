# Greenlight Landing Page - Task for IKONIC DEV

This project is a pixel-perfect landing page built as part of the assessment task for **IKONIC DEV (Private) Limited**.

The design reference was provided via Figma, and the goal was to replicate the layout using custom **HTML**, **Tailwind CSS**, **JavaScript**, and **jQuery** — *without any page builders*.

---

## 📄 Project Overview

- **Type:** Technical Assessment
- **Company:** IKONIC DEV (Private) Limited
- **Scope:** Replicate the Figma design into a functional, responsive landing page.

---

## 🚀 Tech Stack

- **HTML5**
- **Tailwind CSS** (via CLI)
- **JavaScript (JS)**
- **jQuery** (via CDN)
- **Node.js & npm** (for Tailwind CSS build)

---

## 🧩 Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed.

Check versions:
```bash
node -v
npm -v
```

Then install project dependencies:

```bash
npm install
```

### 3. Build Tailwind CSS

Start Tailwind CSS build process in watch mode:

```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```

> ✅ This will watch for changes and automatically update `output.css`.

---

## 💻 Usage

- After running the above command, open `index.html` directly in your browser.
- No local server is required for basic usage.
- For better development experience, you can use **Live Server** extension in VSCode.

---

## ⚙️ Production Build (Optional)

When you're ready to deploy, build a minified CSS file:

```bash
npx tailwindcss -i ./input.css -o ./output.css --minify
```

This will reduce the CSS file size for better performance.

---

## 📁 Project Structure

```
├── node_modules/        # Dependencies (auto-generated)
├── input.css            # Tailwind CSS source file
├── output.css           # Generated CSS file
├── index.html           # Main HTML file
├── package.json         # Project config and dependencies
├── .gitignore           # Ignored files for git
└── README.md            # Project documentation
```

---

## 🚀 Deploying the Project

You can deploy this landing page easily!

### Option 1: **GitHub Pages**

1. Push your code to GitHub.
2. Go to your repository Settings > Pages.
3. Set the source to your main branch and select `/ (root)`.

Done! 🎉

### Option 2: **Vercel**

1. Install Vercel CLI or use their web interface.
2. Connect your repository.
3. Deploy with one click.

---

## 📦 GitHub Repository Setup (First Commit)

If you haven't yet, here's how to initialize and push your project to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Greenlight Landing Page"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

> 🔥 Don’t forget to replace the URL with your actual GitHub repository link.

---

## 📜 .gitignore

Make sure your `.gitignore` includes:

```
# Node modules
node_modules/

# Tailwind CSS output
output.css

# Logs
npm-debug.log*

# OS files
.DS_Store
Thumbs.db
```

---

## ✨ Features

- Pixel-perfect design from Figma
- Responsive layout
- Tailwind CSS utility-first styling
- Clean, maintainable code
- Easy to deploy (GitHub Pages / Vercel)

---

## 📝 Notes

- Ensure you have the latest version of **Node.js** installed.
- Always run the Tailwind CLI in watch mode while developing.
- Customize and extend as needed!

---

## 🔥 Bonus Tips

- Use **Live Server** (VSCode extension) for instant browser reload.
- Consider adding **Prettier** for code formatting.
- Add more responsiveness for smaller devices if needed.
- Minify CSS before production deploy.
- Use GitHub Issues and Projects to track tasks!

---

## 🤝 License

This project is licensed under the ISC License.

---

*Happy coding! 🚀*
