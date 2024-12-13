import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { Calendar, User } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: 'The Future of AI in Regulatory Compliance',
      excerpt: 'Explore how artificial intelligence is transforming the compliance landscape...',
      author: 'Sarah Chen',
      date: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    },
    {
      title: 'GDPR Compliance: A Complete Guide',
      excerpt: 'Everything you need to know about achieving and maintaining GDPR compliance...',
      author: 'Michael Rodriguez',
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'
    },
    {
      title: 'Top 5 Compliance Challenges in 2024',
      excerpt: 'Navigate the most pressing compliance challenges facing businesses today...',
      author: 'Emma Thompson',
      date: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow">
        <Container>
          <section className="py-20">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Latest Insights
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Stay updated with the latest trends and insights in regulatory compliance
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.title} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}