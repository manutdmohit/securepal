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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Remove the top padding to blend with navbar */}
      <HeroSection />
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive IT Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              From website design to cybersecurity, we provide end-to-end IT
              services to keep your business running smoothly and securely.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: 'Website Design & Hosting',
                description:
                  'Professional website design and reliable hosting solutions for your business.',
                features: [
                  'Responsive design for all devices',
                  'SEO optimization',
                  'Fast and reliable hosting',
                ],
                link: '/services/website-design',
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: 'Cybersecurity Solutions',
                description:
                  'Protect your business from cyber threats with our comprehensive security services.',
                features: [
                  'Network security monitoring',
                  'Data encryption',
                  'Security audits and compliance',
                ],
                link: '/services/cybersecurity',
              },
              {
                icon: <Server className="h-6 w-6 text-primary" />,
                title: 'Cloud Solutions',
                description:
                  'Scalable cloud services to enhance your business operations and productivity.',
                features: [
                  'Cloud migration',
                  'Data backup and recovery',
                  'Cloud infrastructure management',
                ],
                link: '/services/cloud-solutions',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section> */}

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
