'use client';

import { useEffect, useRef } from 'react';

interface CommentsProps {
  slug: string;
}

export function Comments({ slug }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: Configure with your GitHub repository
    // Uncomment and configure one of the following:

    // Option 1: Giscus (recommended for GitHub Discussions)
    /*
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'youngseeker/articles');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
    script.setAttribute('data-category', 'Comments');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    commentsRef.current?.appendChild(script);
    */

    // Option 2: Utterances (uses GitHub Issues)
    /*
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'youngseeker/articles');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'preferred-color-scheme');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    commentsRef.current?.appendChild(script);
    */
  }, [slug]);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Comments
      </h2>
      <div ref={commentsRef} className="giscus" />
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm py-8">
        <p>Comments are powered by GitHub. Configure Giscus or Utterances in the Comments component.</p>
        <p className="mt-2">
          Visit{' '}
          <a
            href="https://giscus.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            giscus.app
          </a>
          {' '}or{' '}
          <a
            href="https://utteranc.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            utteranc.es
          </a>
          {' '}to set up.
        </p>
      </div>
    </div>
  );
}
