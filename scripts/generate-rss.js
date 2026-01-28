const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const siteConfig = {
  name: "Personal Blog",
  description: "A blog about philosophy, leadership, and personal growth",
  url: "https://youngseeker.github.io/articles",
  author: "Young Seeker",
};

function generateRssFeed() {
  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/rss.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.author}`,
  });

  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  if (!fs.existsSync(postsDirectory)) {
    console.log('No posts directory found');
    return;
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        category: data.category || 'Uncategorized',
        tags: data.tags || [],
        author: data.author || 'Anonymous',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      date: new Date(post.date),
      categories: [post.category, ...post.tags],
      author: post.author,
    });
  });

  const rssXml = feed.xml({ indent: true });
  const outputPath = path.join(process.cwd(), 'public/rss.xml');
  fs.writeFileSync(outputPath, rssXml);
  console.log('RSS feed generated at public/rss.xml');
}

generateRssFeed();
