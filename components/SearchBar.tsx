'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { PostMetadata } from '@/lib/posts';

interface SearchBarProps {
  posts: PostMetadata[];
  onSearch: (filteredPosts: PostMetadata[]) => void;
}

export function SearchBar({ posts, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.trim() === '') {
      onSearch(posts);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.category.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
      );
    });

    onSearch(filtered);
  }, [query, posts, onSearch]);

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts by title, content, category, or tags..."
          className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>
      {query && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Found {posts.length} result{posts.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
}
