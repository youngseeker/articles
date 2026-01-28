# Personal Blog - Next.js Template

A feature-rich, production-ready personal blog built with Next.js 14, TypeScript, Tailwind CSS, and MDX. Designed for philosophy, leadership, and thought leadership content.

![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Core Features
- 🎨 **Clean, Modern Design** - Minimal and professional layout inspired by modern blog templates
- 📝 **MDX Support** - Write blog posts in Markdown with JSX components
- 🌓 **Dark Mode** - Toggle between light and dark themes with persistent preference
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Blazing Fast** - Static site generation for optimal performance
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support

### Blog Features
- 📑 **Post Listing** - Grid layout with search, filtering, and pagination
- 📖 **Rich Post Pages** - Full MDX rendering with syntax highlighting
- 🏷️ **Categories & Tags** - Organize and filter posts by topics
- 🔎 **Search** - Client-side search across posts
- 📊 **Reading Time** - Automatic reading time estimation
- 📈 **Reading Progress** - Visual progress indicator for posts
- 📚 **Table of Contents** - Auto-generated from headings
- 🔗 **Share Buttons** - Social media sharing (Twitter, LinkedIn, Facebook, Email)
- 💬 **Related Posts** - Smart recommendations based on tags and categories
- ✍️ **Author Bio** - Customizable author information

### Advanced Features
- 🚀 **GitHub Pages Ready** - Configured for easy deployment
- 📧 **Newsletter** - Built-in newsletter subscription form
- 📮 **Contact Form** - Contact page with form validation
- 🎯 **PWA Support** - Progressive Web App with manifest
- ♿ **Accessibility** - ARIA labels and keyboard navigation
- 🎨 **Customizable** - Easy theme customization via Tailwind

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/youngseeker/articles.git
cd articles
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
articles/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── blog/                # Blog listing & post pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── category/[category]/ # Category pages
│   └── tag/[tag]/           # Tag pages
├── components/              # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx
│   ├── SearchBar.tsx
│   ├── ThemeToggle.tsx
│   ├── TableOfContents.tsx
│   ├── ReadingProgress.tsx
│   ├── ShareButtons.tsx
│   └── Newsletter.tsx
├── content/posts/           # MDX blog posts
│   ├── unburdened-mind.mdx
│   ├── inner-factory.mdx
│   ├── inverted-peak.mdx
│   └── vulnerability.mdx
├── lib/                     # Utilities
│   ├── posts.ts            # Post fetching logic
│   ├── config.ts           # Site configuration
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
│   ├── images/
│   └── icons/
├── .github/workflows/       # GitHub Actions
│   └── deploy.yml          # Deployment workflow
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## ✍️ Adding New Blog Posts

1. **Create a new MDX file** in `content/posts/`:

```bash
touch content/posts/my-new-post.mdx
```

2. **Add frontmatter** at the top of your file:

```mdx
---
title: "Your Post Title"
date: "2024-01-28"
excerpt: "A brief description of your post"
category: "Philosophy"
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
featured: false
image: "/images/my-post.jpg"
---

## Your Content Here

Write your post content in Markdown...
```

3. **Write your content** using Markdown and MDX syntax

4. **Add an image** (optional) to `public/images/`

5. **Build and preview**:
```bash
npm run build
npm start
```

### Frontmatter Fields

- **title** (required): Post title
- **date** (required): Publication date (YYYY-MM-DD)
- **excerpt** (required): Short description for previews
- **category** (required): Main category (e.g., "Philosophy", "Technology")
- **tags** (required): Array of tags
- **author** (optional): Author name (defaults to site author)
- **featured** (optional): Boolean to feature on home page
- **image** (optional): Path to featured image

## 🎨 Customization

### Site Configuration

Edit `lib/config.ts` to customize:

```typescript
export const siteConfig = {
  name: "Your Blog Name",
  author: "Your Name",
  description: "Your blog description",
  url: "https://yourusername.github.io/your-repo",
  links: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  creator: {
    name: "Your Name",
    email: "your.email@example.com",
    bio: "Your bio here...",
  },
};
```

### Colors and Theme

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    // Your color palette
    500: '#your-color',
    600: '#your-color',
    // ...
  },
}
```

### Typography

The blog uses Inter font by default. Change it in `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

## 📦 Building for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

This template includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Set Source to "GitHub Actions"

2. **Update Configuration**:
   - Edit `next.config.mjs` and set the `basePath` to your repo name
   - Update `lib/config.ts` with your GitHub Pages URL

3. **Push to main branch**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

4. **Access your site**:
   Your site will be available at `https://yourusername.github.io/your-repo`

### Manual Deployment

```bash
npm run build
# Upload the 'out' directory to your hosting provider
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: GitHub Pages

## 📝 Included Blog Posts

The template comes with 4 pre-written philosophical blog posts:

1. **The Architecture of the Unburdened Mind** - Exploring the shift from pilot to steward mindset
2. **The Law of the Inner Factory** - Understanding the persona tax and inside-out transformation
3. **The Paradox of the Inverted Peak** - Redefining success through servant leadership
4. **The Vulnerability of True Authority** - The power of vulnerability in authentic leadership

Plus 2 additional posts demonstrating technical and list-style content.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](LICENSE) licensed.

## 💬 Support

If you have any questions or need help, please open an issue on GitHub.

## 🙏 Acknowledgments

- Design inspired by modern personal blog templates
- Built with amazing open-source tools and libraries

---

**Happy Blogging!** 🚀

Made with ❤️ by [Young Seeker](https://github.com/youngseeker)
