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