# Project Portfolio

A modern React application for showcasing your projects with a beautiful interface and intuitive navigation.

## Features

- 🎨 Modern design with gradients and animations
- 📱 Responsive design for all devices
- 🔄 Project navigation with forward/back buttons
- 📊 Project counter
- 🔗 Links to GitHub repositories
- 📞 Contact information in navbar
- 📄 Resume download functionality
- 🍎 iOS/macOS version badges
- ⚡ Skeleton loading animations
- 🔄 Auto-slideshow functionality

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── ProjectShowcase.jsx # Main project showcase component
│   └── ScrollToTop.jsx     # Scroll to top functionality
├── data/
│   └── projects.js         # Project data
├── pages/
│   └── ProjectDetail.jsx   # Individual project detail page
├── App.jsx                 # Main component
└── index.css               # Global styles
```

## Installation and Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd resume
```

2. Install dependencies:
```bash
npm install
```

3. Run the project in development mode:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Configuration

### 1. Update Project Data

Edit the `src/data/projects.js` file:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Feature 1",
      "Feature 2", 
      "Feature 3"
    ],
    githubUrl: "https://github.com/yourusername/your-project",
    imageUrl: "/images/your-project-screenshot.png",
    iosVersion: "17",        // iOS version requirement
    isMac: false,            // true for macOS apps
    galleryImages: [         // Additional screenshots
      "/images/p1.png",
      "/images/p2.png"
    ]
  }
  // Add more projects...
];
```

### 2. Update Contact Information

Edit the `src/components/Navbar.jsx` file:

```javascript
// Replace with your data
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
```

### 3. Add Project Screenshots

1. Place images in the `public/images/` folder
2. Update `imageUrl` in project data

### 4. Add Resume

1. Place your resume file (PDF) in the `public/` folder
2. Update the path in `Navbar.jsx`:

```javascript
link.href = '/your-resume.pdf';
link.download = 'your-resume.pdf';
```

## Mobile Optimization

The application features a dedicated mobile layout with:
- Vertical content flow: Title → Description → Image → Features
- Compact navigation controls
- Touch-friendly buttons
- Optimized text sizes
- Skeleton loading animations

## Deployment to GitHub Pages

1. Create a repository on GitHub

2. Add deployment script to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Update `vite.config.js` (already configured for 'project-showcase'):
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/project-showcase/'
})
```

5. Deploy:
```bash
npm run deploy
```

## Production Build

```bash
npm run build
```

## Technologies

- React 18
- Vite
- React Router
- CSS3 with gradients and animations
- Font Awesome icons
- Responsive Design
- Tailwind CSS

## License

MIT