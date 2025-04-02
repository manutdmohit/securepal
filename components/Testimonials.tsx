'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Testimonials Data
const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'CEO, Tech Innovators',
    feedback:
      'SecurePal provided top-notch security solutions tailored to our business needs. Their team is professional, reliable, and proactive!',
    image: '/avatars/emily.jpg',
  },
  {
    name: 'David Miller',
    role: 'Operations Manager, SafeCorp',
    feedback:
      'We’ve never felt safer! SecurePal’s team is dedicated and highly skilled, ensuring our premises remain secure at all times.',
    image: '/avatars/david.jpg',
  },
  {
    name: 'Sophia Patel',
    role: 'Founder, ShieldTech',
    feedback:
      'The level of professionalism and expertise from SecurePal is unmatched. Their security assessments helped us identify critical risks.',
    image: '/avatars/sophia.jpg',
  },
  {
    name: 'James Anderson',
    role: 'Director, Anderson Enterprises',
    feedback:
      'From consultation to execution, SecurePal exceeded our expectations. We now have a robust security system in place!',
    image: '/avatars/james.jpg',
  },
];

// Carousel Responsive Settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 2 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const TestimonialCarousel = () => {
  return (
    <section className="w-full max-w-6xl mx-auto bg-gray-50 text-primary flex flex-col items-center justify-center py-16 px-6 border rounded-md border-gray-200 dark:border-gray-700">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        arrows={true}
        className="w-full max-w-5xl"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-primary text-white p-6 rounded-lg shadow-lg text-center mx-2 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* ShadCN Avatar with Image and Fallback */}
            <Avatar className="mb-4">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="text-lg">"{testimonial.feedback}"</p>
            <h3 className="mt-4 text-xl font-semibold ">{testimonial.name}</h3>
            <span className="text-sm">{testimonial.role}</span>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
