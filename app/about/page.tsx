import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${siteConfig.creator.name}`,
};

export default function AboutPage() {
  const skills = [
    'Philosophy',
    'Leadership',
    'Writing',
    'Public Speaking',
    'Coaching',
    'Strategic Thinking',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thinker. Writer. Explorer of Ideas.
          </p>
        </div>

        {/* Profile */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-bold mb-6">
            {siteConfig.creator.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {siteConfig.creator.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {siteConfig.creator.email}
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${siteConfig.creator.email}`}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bio */}
        <div className="prose prose-lg dark:prose-dark max-w-none mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            My Story
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {siteConfig.creator.bio}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Through this blog, I explore the intersection of ancient wisdom and modern challenges. 
            My work focuses on helping individuals and organizations navigate complexity with clarity, 
            purpose, and sustainable practices.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I believe that true leadership isn't about being the greatest—it's about being the most helpful. 
            It's about creating environments where people can thrive, where vulnerability is strength, 
            and where authenticity trumps performance.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Areas of Focus
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center"
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="mb-6 text-primary-50">
            Interested in collaborating or just want to say hello?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
