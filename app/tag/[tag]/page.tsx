import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllTags, getPostsByTag } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import type { Metadata } from 'next';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag);
  
  return {
    title: `#${tag} Articles`,
    description: `Browse all articles tagged with ${tag}`,
  };
}

export default function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          #{tag}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {posts.length} article{posts.length !== 1 ? 's' : ''} with this tag
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
