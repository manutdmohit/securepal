'use client';

import React from 'react';
import {
  Headset,
  Laptop2,
  Network,
  Server,
  RefreshCcw,
  LifeBuoy,
  Globe,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Remote & On-Site Support',
    description:
      'Get expert help anytime, whether remotely or at your location.',
    icon: <Headset className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Hardware & Software Troubleshooting',
    description: 'Quick diagnosis and resolution for all IT-related issues.',
    icon: <Laptop2 className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Network Management',
    description:
      'Optimize and secure your business network for peak performance.',
    icon: <Network className="h-10 w-10 text-primary" />,
  },
  {
    title: 'System Updates & Maintenance',
    description: 'Keep your IT infrastructure up-to-date and secure.',
    icon: <RefreshCcw className="h-10 w-10 text-primary" />,
  },
  {
    title: 'IT Helpdesk Services',
    description: 'Dedicated support team to assist with all your IT concerns.',
    icon: <LifeBuoy className="h-10 w-10 text-primary" />,
  },
];

const ITSupport = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-16">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          24/7 IT Support Services
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Round-the-clock technical assistance for all your IT needs.
        </p>
      </div>

      {/* Image Section */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57"
          alt="24/7 IT Support"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
          priority
        />
      </motion.div>

      {/* Features Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {feature.icon}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get IT Support Anytime, Anywhere!
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Our IT specialists are available 24/7 to ensure your business runs
          smoothly.
        </p>
        <Button className="mt-6">
          <Link href="/contact" className="flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span>Contact Us</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ITSupport;
