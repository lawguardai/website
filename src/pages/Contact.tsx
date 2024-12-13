import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-600 to-blue-800">
      <LandingHeader />
      
      <main className="flex-grow py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              We're here to help with your compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-600">
                  support@lawguardai.com
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                </div>
                <p className="text-gray-600">
                  +1 (555) 123-4567
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
                </div>
                <p className="text-gray-600">
                  Available Monday to Friday<br />
                  9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}