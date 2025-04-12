'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WordTypewriter from '@/components/WordTypeWriter';
import { Button } from '@/components/ui/button';

const heroPhrases = [
  'Secure IT Solutions',
  'Cybersecurity Experts',
  'Cloud Innovators',
  'Web Development Specialists',
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Background"
        fill
        sizes="100vw"
        priority
        className="absolute inset-0 object-cover brightness-[0.7] z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto flex h-full flex-col items-center justify-center text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            <WordTypewriter words={heroPhrases} />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90"
          >
            Comprehensive IT services, Cybersecurity, Cloud Solutions, and Web
            Hosting tailored to your business needs.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="text-lg px-6 py-3">
              <Link href="/services">Explore Services</Link>
            </Button>

            <Button className="text-lg px-6 py-3">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
