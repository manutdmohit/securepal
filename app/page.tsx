'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Server, Globe, ArrowRight } from 'lucide-react';
// import TestimonialCarousel from '@/components/testimonial-carousel';
import { motion } from 'framer-motion';
import HeroSection from '@/components/Hero';
import ServicesShowcase from '@/components/Services';
import TestimonialCarousel from '@/components/Testimonials';
import BlogCarousel from '@/components/Blog';
import UpgradeSection from '@/components/UpgradeSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Remove the top padding to blend with navbar */}
      <HeroSection />
      <UpgradeSection />
      {/* Services Overview */}
      <ServicesShowcase />
      <TestimonialCarousel />
      <BlogCarousel />

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Secure Your Business?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our IT
              solutions can help your business thrive.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
