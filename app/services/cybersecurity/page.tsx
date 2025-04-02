'use client';

import React from 'react';
import {
  ShieldCheck,
  Lock,
  GlobeLock,
  Database,
  Key,
  ServerCrash,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ContactButtonHelper } from '@/helpers/contact-button-helper';

const features = [
  {
    title: 'Advanced Threat Protection',
    description:
      'AI-powered cybersecurity solutions to prevent cyber attacks before they happen.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Data Encryption & Privacy',
    description:
      'Secure your sensitive data with industry-leading encryption protocols.',
    icon: <Lock className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Network Security & Firewall',
    description:
      'Protect your IT infrastructure with robust network security measures.',
    icon: <GlobeLock className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Cyber Risk Assessment',
    description:
      'Identify vulnerabilities and strengthen your cybersecurity strategy.',
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Access Control & Authentication',
    description: 'Multi-layered authentication to prevent unauthorized access.',
    icon: <Key className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Incident Response & Recovery',
    description:
      'Fast and effective solutions to mitigate security breaches and recover data.',
    icon: <ServerCrash className="h-10 w-10 text-primary" />,
  },
];

const CyberSecurity = () => {
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
          Elite Cybersecurity Services
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Protect your business with cutting-edge cybersecurity solutions
          designed to keep threats at bay.
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
          src="https://images.unsplash.com/photo-1614064548016-0b5c13ca2c85"
          alt="Cybersecurity Protection"
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
          Secure Your Business Today!
        </motion.h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Get in touch with our cybersecurity experts to fortify your digital
          assets.
        </p>
        <ContactButtonHelper />
      </div>
    </section>
  );
};

export default CyberSecurity;
