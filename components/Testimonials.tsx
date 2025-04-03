'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

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
  superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 3 },
  desktop: { breakpoint: { max: 1400, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const TestimonialCarousel = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black">
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12"
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
        autoPlaySpeed={5000}
        arrows={false}
        className="w-full max-w-6xl"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl mx-3 flex flex-col items-center text-center min-h-[400px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Avatar */}
            <Avatar className="w-20 h-20 mb-4 ring-4 ring-primary dark:ring-gray-700">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback className="text-2xl font-bold">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            {/* Quote Icon */}
            <Quote
              size={48}
              className="text-primary absolute top-6 left-6 opacity-20"
            />

            {/* Feedback Text */}
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium italic leading-relaxed">
              "{testimonial.feedback}"
            </p>

            {/* Name & Role */}
            <div className="mt-auto">
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </span>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
