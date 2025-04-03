'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-16">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Explore Security Trends & Insights
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Stay ahead with expert analyses, emerging trends, and best practices
          in cybersecurity and data privacy.
        </p>
      </motion.div>

      {/* Featured Blog */}
      <motion.div
        className="mt-10 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={blogPosts[0].image}
          alt={blogPosts[0].title}
          width={600}
          height={400}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="p-8 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {blogPosts[0].title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {blogPosts[0].excerpt}
          </p>
          <div className="mt-4 flex items-center space-x-3">
            <Avatar>
              <AvatarImage
                src={blogPosts[0].author.image}
                alt={blogPosts[0].author.name}
              />
              <AvatarFallback>
                {blogPosts[0].author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <p className="text-gray-700 dark:text-gray-300 text-sm flex items-center space-x-2">
              <span>{blogPosts[0].author.name}</span>
              <span>•</span>
              <span>{blogPosts[0].date}</span>
            </p>
          </div>
          <Button asChild className="mt-4">
            <Link href={`/blog/${blogPosts[0].slug}`}>Read More</Link>
          </Button>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(1).map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.02 }}
            className="w-full"
          >
            <Card className="bg-white dark:bg-gray-800 shadow-md min-h-[550px]">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col mt-auto space-y-4">
                <div className="mt-auto flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src={post.author.image}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-gray-700 dark:text-gray-300 text-sm flex items-center space-x-2">
                    <span>{post.author.name}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
