'use client';

import { useState } from 'react';
import { PostCard } from '@/components/PostCard';
import { SearchBar } from '@/components/SearchBar';
import type { PostMetadata } from '@/lib/posts';

interface BlogClientProps {
  initialPosts: PostMetadata[];
  categories: string[];
  tags: string[];
}

export function BlogClient({ initialPosts, categories, tags }: BlogClientProps) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedTag(null);
    if (category === null) {
      setFilteredPosts(initialPosts);
    } else {
      setFilteredPosts(initialPosts.filter((post) => post.category === category));
    }
  };

  const handleTagFilter = (tag: string | null) => {
    setSelectedTag(tag);
    setSelectedCategory(null);
    if (tag === null) {
      setFilteredPosts(initialPosts);
    } else {
      setFilteredPosts(initialPosts.filter((post) => post.tags.includes(tag)));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts on philosophy, leadership, technology, and personal growth
        </p>
      </div>

      {/* Search */}
      <div className="mb-12 flex justify-center">
        <SearchBar posts={initialPosts} onSearch={setFilteredPosts} />
      </div>

      {/* Filters */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories */}
          <div className="lg:w-64">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Categories
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              <button
                onClick={() => handleCategoryFilter(null)}
                className={`px-4 py-2 rounded-lg text-left transition-colors ${
                  selectedCategory === null
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg text-left transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="flex-1">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  No posts found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagFilter(selectedTag === tag ? null : tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTag === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
