'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import { useTypewriter } from '@/hooks/useTypewriter';

const heroText = [
  'Secure IT Solutions',
  'Cybersecurity Experts',
  'Cloud Innovators',
  'Web Development Specialists',
];
const typingSpeed = 150;
const deleteSpeed = 50;
const delayBetweenStrings = 2000;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

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

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

      {/* Content */}
      <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            className={`text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl bg-clip-text`}
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0px 0px 0px rgba(0,0,0,0)',
                '0px 4px 16px rgba(0, 255, 76, 0.692)',
                '0px 0px 0px rgba(0,0,0,0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <span>
              {useTypewriter(heroText, typingSpeed, deleteSpeed)}
              <span className="text-white animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.div
            className="bg-white/8 backdrop-blur-sm/10 rounded-md p-6 mx-auto mt-6 text-lg sm:text-xl md:text-2xl text-white/90"
            variants={fadeInUp}
            style={{ animationDelay: '0.2s' }}
          >
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90"
              style={{ animationDelay: '0.2s' }}
            >
              Comprehensive IT services, Cybersecurity, Cloud Solutions, And
              Website Hosting Tailored To Your Business Needs.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center"
              style={{ animationDelay: '0.4s' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0px 0px 0px rgba(0,0,0,0)',
                      '0px 4px 16px rgba(224, 13, 143, 0.2)',
                      '0px 0px 0px rgba(0,0,0,0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="bg-primary text-white text-lg border-white hover:bg-primary/80 hover:text-white p-2 rounded-md"
                >
                  <Link href="/services">Explore Services</Link>
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0px 0px 0px rgba(0,0,0,0)',
                      '0px 4px 16px rgba(255,0,0,0.2)',
                      '0px 0px 0px rgba(0,0,0,0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="bg-primary text-white border-white hover:bg-primary/80 hover:text-white p-2 rounded-md md:mx-2 text-lg"
                >
                  <Link href="/contact">Get a Free Consultation</Link>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
