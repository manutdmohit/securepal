'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Server,
  Globe,
  HeadphonesIcon,
  Cloud,
  Database,
  ArrowRight,
} from 'lucide-react';

// Define service types
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  fallbackImage: string;
  link: string;
  features: string[];
}

// Services data
const services: Service[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description:
      'Protect your business from evolving cyber threats with our comprehensive security services.',
    icon: <Shield className="h-6 w-6" />,
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop',
    fallbackImage: '/placeholder.svg?height=600&width=800&text=Cybersecurity',
    link: '/services/cybersecurity',
    features: [
      'Network security monitoring',
      'Vulnerability assessments',
      'Data encryption',
      'Security audits and compliance',
      'Employee security training',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud services to enhance your business operations and productivity.',
    icon: <Cloud className="h-6 w-6" />,
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop',
    fallbackImage: '/placeholder.svg?height=600&width=800&text=Cloud+Solutions',
    link: '/services/cloud-solutions',
    features: [
      'Cloud migration',
      'Data backup and recovery',
      'Cloud infrastructure management',
      'SaaS implementation',
      'Hybrid cloud solutions',
    ],
  },
  {
    id: 'website',
    title: 'Website Design & Hosting',
    description:
      'Professional website design and reliable hosting solutions for your business.',
    icon: <Globe className="h-6 w-6" />,
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1464&auto=format&fit=crop',
    fallbackImage: '/placeholder.svg?height=600&width=800&text=Website+Design',
    link: '/services/website-design',
    features: [
      'Responsive design for all devices',
      'SEO optimization',
      'Fast and reliable hosting',
      'Content management systems',
      'E-commerce solutions',
    ],
  },
  {
    id: 'it-support',
    title: '24/7 IT Support',
    description: 'Round-the-clock technical assistance for all your IT needs.',
    icon: <HeadphonesIcon className="h-6 w-6" />,
    image:
      'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=1470&auto=format&fit=crop',
    fallbackImage: '/placeholder.svg?height=600&width=800&text=IT+Support',
    link: '/services/it-support',
    features: [
      'Remote and on-site support',
      'Hardware and software troubleshooting',
      'Network management',
      'System updates and maintenance',
      'IT helpdesk services',
    ],
  },
  {
    id: 'infrastructure',
    title: 'IT Infrastructure',
    description:
      'Build and maintain a robust IT infrastructure that scales with your business.',
    icon: <Server className="h-6 w-6" />,
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop',
    fallbackImage:
      '/placeholder.svg?height=600&width=800&text=IT+Infrastructure',
    link: '/services/infrastructure',
    features: [
      'Network design and implementation',
      'Server setup and management',
      'Hardware procurement',
      'Infrastructure monitoring',
      'Disaster recovery planning',
    ],
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description:
      'Secure, efficient data storage and management solutions for your business.',
    icon: <Database className="h-6 w-6" />,
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop',
    fallbackImage: '/placeholder.svg?height=600&width=800&text=Data+Management',
    link: '/services/data-management',
    features: [
      'Data backup and recovery',
      'Database management',
      'Data migration',
      'Data security',
      'Business intelligence',
    ],
  },
];

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const handleImageError = (serviceId: string) => {
    setImgError((prev) => ({ ...prev, [serviceId]: true }));
  };

  const getImageSrc = (service: Service) => {
    return imgError[service.id] ? service.fallbackImage : service.image;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg font-bold text-primary/95">
            From cybersecurity to cloud services, we provide end-to-end IT
            solutions tailored to your business needs.
          </p>
        </motion.div>
        {/* Services Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Service Selection */}
          <motion.div
            className="mx-auto lg:col-span-4 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-1 mb-8">
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-1 gap-1">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                      activeService.id === service.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-full mb-2 ${
                        activeService.id === service.id
                          ? 'bg-white/20'
                          : 'bg-white/10'
                      }`}
                    >
                      <div
                        className={
                          activeService.id === service.id
                            ? 'text-white'
                            : 'text-primary'
                        }
                      >
                        {service.icon}
                      </div>
                    </div>
                    <span className="text-sm font-bold text-center text-green-">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Service Details */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Service Image */}
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={getImageSrc(activeService) || '/placeholder.svg'}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(activeService.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <motion.div
                        key={`title-${activeService.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 mb-2"
                      >
                        <div className="p-2 bg-white/20 rounded-full">
                          {activeService.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {activeService.title}
                        </h3>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 md:p-8">
                  <motion.div
                    key={`content-${activeService.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className=" font-bold text-primary/95 mb-6">
                      {activeService.description}
                    </p>

                    <h4 className="font-semibold mb-4">Key Features:</h4>
                    <ul className="space-y-3 mb-8">
                      {activeService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="bg-/10 p-1 rounded-full mr-3 mt-0.5">
                            <ArrowRight className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-primary font-semibold text-sm">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button asChild className="bg-primary hover:bg-primary/80">
                      <Link href={activeService.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* View All Services Button */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
