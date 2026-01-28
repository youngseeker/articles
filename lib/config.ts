export const siteConfig = {
  name: "Personal Blog",
  author: "Young Seeker",
  description: "A blog about philosophy, leadership, and personal growth",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://youngseeker.github.io/articles",
  ogImage: "/images/og-image.png",
  links: {
    twitter: "https://twitter.com/youngseeker",
    github: "https://github.com/youngseeker",
    linkedin: "https://linkedin.com/in/youngseeker",
  },
  creator: {
    name: "Young Seeker",
    email: "contact@example.com",
    bio: "A thinker, writer, and explorer of ideas. Passionate about philosophy, leadership, and the architecture of meaningful work.",
    avatar: "/images/avatar.png",
  },
};

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
