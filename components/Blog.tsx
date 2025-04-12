'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { blogPosts } from '@/data/blog';

// Carousel Responsive Settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 2 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

// Custom Arrows Component
const CustomArrows = ({ next, previous }: ButtonGroupProps) => {
  return (
    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-6 z-10">
      <button
        onClick={previous}
        className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

// Blog Carousel Component
const BlogCarousel = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 bg-gray-50 text-primary flex flex-col items-center justify-center py-16 px-6  relative">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Latest Blogs
      </motion.h2>

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        arrows={false}
        customButtonGroup={<CustomArrows />}
        className="w-full max-w-5xl"
      >
        {blogPosts.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center mx-2 flex flex-col items-center min-h-[425px] p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-48 relative">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-md"
                priority
              />
            </div>
            <h3 className="mt-auto text-xl font-semibold">{blog.title}</h3>
            <div className="text-sm mt-auto">
              <p className=" text-gray-600">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className=" text-blue-600 mt-2 font-bold  underline decoration-2 decoration-blue-600"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
};

export default BlogCarousel;
