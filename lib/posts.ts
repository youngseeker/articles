import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  featured?: boolean;
  image?: string;
  slug: string;
  readingTime: string;
}

export interface Post extends PostMetadata {
  content: string;
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        category: data.category || 'Uncategorized',
        tags: data.tags || [],
        author: data.author || 'Anonymous',
        featured: data.featured || false,
        image: data.image || '/images/default-post.jpg',
        readingTime: stats.text,
      };
    });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      content,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      author: data.author || 'Anonymous',
      featured: data.featured || false,
      image: data.image || '/images/default-post.jpg',
      readingTime: stats.text,
    };
  } catch (error) {
    return null;
  }
}

export function getPostsByCategory(category: string): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => 
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}

export function getFeaturedPosts(): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured).slice(0, 3);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): PostMetadata[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  
  // Filter out current post and find posts with matching tags or category
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      
      // Same category
      if (post.category === currentPost.category) {
        score += 3;
      }
      
      // Matching tags
      const matchingTags = post.tags.filter((tag) => 
        currentPost.tags.includes(tag)
      ).length;
      score += matchingTags * 2;
      
      return { ...post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return relatedPosts;
}
