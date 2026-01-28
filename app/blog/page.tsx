import { getAllPosts, getAllCategories, getAllTags } from '@/lib/posts';
import { BlogClient } from './BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles on philosophy, leadership, and personal growth',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return <BlogClient initialPosts={posts} categories={categories} tags={tags} />;
}
