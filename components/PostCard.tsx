import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { PostMetadata } from '@/lib/posts';

interface PostCardProps {
  post: PostMetadata;
}

export function PostCard({ post }: PostCardProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/articles' : '';
  
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={`${basePath}${post.image}`}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
