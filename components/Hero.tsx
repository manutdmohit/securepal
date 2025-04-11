'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg?height=1080&width=1920&text=IT+Services+Background"
          alt="IT Services Background"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      {/* Overlay gradient with SecurePal blue */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70  to-black/40 z-10"></div>

      {/* Content */}
      <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Secure IT Solutions for Your Business
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90">
            Comprehensive IT services, Cybersecurity, Cloud Solutions, And
            Website Hosting Tailored To Your Business Needs.
          </p>
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-primary hover:text-white"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-primary hover:text-white"
              >
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
