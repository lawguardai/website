import React, { useState } from 'react';
import { useEmailCapture } from '../../hooks/useEmailCapture';

export function EmailCaptureForm() {
  const [email, setEmail] = useState('');
  const { subscribe, loading, error, success } = useEmailCapture();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors disabled:opacity-50"
        >
          {loading ? 'Joining...' : 'Join the Waitlist'}
        </button>
        {error && (
          <p className="text-red-300 text-sm">{error}</p>
        )}
        {success && (
          <p className="text-green-300 text-sm">
            Thanks for joining! Check your email for confirmation.
          </p>
        )}
      </form>
    </div>
  );
}