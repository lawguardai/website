import React from 'react';

export function ComparisonTestimonials() {
  const testimonials = [
    {
      quote:
        "After trying multiple compliance solutions, Lawguard AI is the only one that truly delivered on its promises. It's saved us countless hours and helped us expand internationally with confidence.",
      author: "Sarah Chen",
      position: "Chief Compliance Officer",
      company: "TechGrowth Inc."
    },
    {
      quote:
        "The automated compliance checks and real-time updates have transformed how we handle regulatory requirements. It's like having a compliance expert on call 24/7.",
      author: "Michael Rodriguez",
      position: "Legal Director",
      company: "Global Commerce Solutions"
    },
    {
      quote:
        "Lawguard AI's document generation and management features are far superior to any competitor we've used. It's streamlined our entire compliance process.",
      author: "Emma Thompson",
      position: "Head of Operations",
      company: "DataSecure Systems"
    }
  ];

  return (
    <section className="px-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-xl"
            >
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm text-blue-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}