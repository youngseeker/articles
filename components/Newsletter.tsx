'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with your newsletter service (e.g., Mailchimp, ConvertKit)
    // For now, just simulate a submission
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Subscribe to the Newsletter</h3>
        <p className="mb-6 text-primary-50">
          Get the latest articles and insights delivered directly to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-100' : 'text-white'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
