# Portfolio Website

A modern, minimal portfolio built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Clean, professional design
- 📱 Fully responsive
- ⚡ Built with Vite for lightning-fast development
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 📄 Resume download

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Navigate to the portfolio folder:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📝 Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the subtitle/tagline
   - Change the initials in the avatar circle

2. **About Section** (`src/components/About.tsx`):
   - Write your own bio
   - Update location and quick facts
   - Add your resume PDF to `/public/resume.pdf`

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove skills
   - Update proficiency levels
   - Change icons (emojis)

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace dummy projects with your actual projects
   - Add GitHub and live demo links
   - Update project images

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address
   - Add your social media links (GitHub, LinkedIn, etc.)

## 🎨 Color Scheme

The portfolio uses a minimal gray color palette:
- Primary: `gray-900` (#111827)
- Background: White
- Accent: `gray-50` for sections

To change colors, update the Tailwind classes in the components.

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize!
