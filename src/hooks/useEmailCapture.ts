import { useState } from 'react';

export function useEmailCapture() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSuccess(true);
      // You would typically store this in your database
      console.log('Subscribed email:', email);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    subscribe,
    loading,
    error,
    success
  };
}