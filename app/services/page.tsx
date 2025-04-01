'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Globe,
  Shield,
  Server,
  AlignVerticalSpaceAround,
  Headset,
  Monitor,
  Router,
  Phone,
  Database,
  Cloud,
  Mail,
  Laptop,
  HardDrive,
  BarChart3,
  Smartphone,
  Wrench,
  MessageSquare,
  Settings,
  Video,
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function ServicesPage() {
  // Service categories
  const serviceCategories = [
    {
      title: 'IT Infrastructure',
      services: [
        {
          icon: <Router className="h-6 w-6 text-primary" />,
          title: 'Router Installation',
          description:
            'Expert setup and configuration of network routers for optimal performance and security.',
          link: '/services/router-installation',
        },
        {
          icon: <Headset className="h-6 w-6 text-primary" />,
          title: '24/7 IT Support',
          description:
            'Round-the-clock technical assistance for all your IT needs with rapid response times.',
          link: '/services/it-support',
        },
        // {
        //   icon: <Monitor className="h-6 w-6 text-primary" />,
        //   title: 'CCTV Monitoring',
        //   description:
        //     'Installation and monitoring of security camera systems to protect your business premises.',
        //   link: '/services/cctv-monitoring',
        // },
        {
          icon: <Laptop className="h-6 w-6 text-primary" />,
          title: 'Computer Repair',
          description:
            'Expert diagnosis and repair of computer hardware and software issues for minimal downtime.',
          link: '/services/computer-repair',
        },
      ],
    },
    {
      title: 'Web Services',
      services: [
        {
          icon: <Globe className="h-6 w-6 text-primary" />,
          title: 'Website Design',
          description:
            'Professional, responsive website design tailored to your business needs and brand identity.',
          link: '/services/website-design',
        },
        {
          icon: <Server className="h-6 w-6 text-primary" />,
          title: 'Website Hosting',
          description:
            'Reliable, secure hosting solutions with 99.9% uptime guarantee and regular backups.',
          link: '/services/website-hosting',
        },
        {
          icon: <AlignVerticalSpaceAround className="h-6 w-6 text-primary" />,
          title: 'Web Development Consulting',
          description:
            'Expert web development services for your business needs.',
          link: '/services/web-development-consulting',
        },

        {
          icon: <BarChart3 className="h-6 w-6 text-primary" />,
          title: 'Digital Marketing',
          description:
            'Comprehensive digital marketing strategies to increase your online presence and drive growth.',
          link: '/services/digital-marketing',
        },
      ],
    },
    {
      title: 'Communication',
      services: [
        {
          icon: <Phone className="h-6 w-6 text-primary" />,
          title: 'VoIP Setup',
          description:
            'Voice over IP phone systems for efficient business communication and reduced costs.',
          link: '/services/voip-setup',
        },
        {
          icon: <Mail className="h-6 w-6 text-primary" />,
          title: 'Professional Email',
          description:
            'Business email hosting and management solutions with advanced security features.',
          link: '/services/email-services',
        },
        {
          icon: <MessageSquare className="h-6 w-6 text-primary" />,
          title: 'M365 / G Suite Setup',
          description:
            'Expert configuration of Microsoft 365 or Google Workspace for your business collaboration needs.',
          link: '/services/office-suite-setup',
        },
        {
          icon: <Mail className="h-6 w-6 text-primary" />,
          title: 'Email Migration',
          description:
            'Seamless migration of email services to new platforms with zero data loss and minimal downtime.',
          link: '/services/email-migration',
        },
      ],
    },
    {
      title: 'Security & Data',
      services: [
        {
          icon: <Shield className="h-6 w-6 text-primary" />,
          title: 'Cybersecurity',
          description:
            'Comprehensive security solutions to protect your business from evolving cyber threats.',
          link: '/services/cybersecurity',
        },
        {
          icon: <Database className="h-6 w-6 text-primary" />,
          title: 'Data Backup',
          description:
            'Secure data backup and disaster recovery solutions to safeguard your critical business information.',
          link: '/services/data-backup',
        },
        {
          icon: <Cloud className="h-6 w-6 text-primary" />,
          title: 'Cloud Solutions',
          description:
            'Scalable cloud services for storage, applications, and infrastructure with expert management.',
          link: '/services/cloud-solutions',
        },
        {
          icon: <HardDrive className="h-6 w-6 text-primary" />,
          title: 'Data Migration',
          description:
            'Secure and efficient transfer of your data between systems, platforms, or environments.',
          link: '/services/data-migration',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 px-6 md:px-12 lg:px-24">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-white/20 text-white"
            >
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
              Comprehensive IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              From website design to cybersecurity, we provide end-to-end IT
              services to keep your business running smoothly and securely.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-medium"
              >
                <Link href="#full-service">Full Service Package</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-medium"
              >
                <Link href="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Full Service Package */}
      <section id="full-service" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158/?height=800&width=600&text=Full+Service+IT"
                alt="Full Service Package"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <Badge className="mb-2 bg-primary text-white">Premium</Badge>
                  <h3 className="text-2xl font-bold text-white">
                    Enterprise-Grade IT Support
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4">Featured</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Full Service IT Package
              </h2>
              <p className="text-muted-foreground mb-6">
                Our comprehensive IT solution covers all your business
                technology needs with one simple package. Get peace of mind
                knowing that all aspects of your IT infrastructure are being
                managed by experts.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Headset className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium">24/7 Support</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock monitoring and support for your systems
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium">Security</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive protection against cyber threats
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Cloud className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium">Cloud Services</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Managed cloud infrastructure and applications
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Settings className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium">IT Strategy</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Strategic planning and technology roadmapping
                  </p>
                </div>
              </div>

              <Button asChild size="lg" className="group">
                <Link href="/services/full-service">
                  Learn More{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted' : ''}`}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-5">
                {category.title}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {category.title} Services
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
            </motion.div>

            {/* Card Grid - Centered with fixed spacing */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    custom={index}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex"
                  >
                    <Card className="flex flex-col w-full border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all">
                      <CardHeader className="pt-6 pb-2">
                        <div className="mb-5 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                          {service.icon}
                        </div>
                        <CardTitle className="mb-2">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-4 flex-grow">
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </CardContent>
                      <CardFooter className="pt-2 pb-6 mt-auto">
                        <Button asChild className="w-full group">
                          <Link href={service.link}>
                            Learn More{' '}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Handle categories with less than 4 services */}
            {category.services.length < 4 &&
              category.title === 'Web Services' && (
                <div className="mt-12 text-center">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services/web-services" className="group">
                      View All Web Services{' '}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              )}
          </div>
        </section>
      ))}

      {/* Phone Repair & Replacement - Special Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary text-white">
                Specialized Service
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Phone Repair & Replacement
              </h2>
              <p className="text-muted-foreground mb-6">
                We offer professional repair services for all major smartphone
                brands. From screen replacements to battery issues, our
                certified technicians can diagnose and fix your device quickly
                and affordably.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>Screen repair and replacement for all major brands</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>Battery replacement and optimization</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>Water damage recovery services</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>Software troubleshooting and data recovery</p>
                </div>
              </div>

              <Button asChild size="lg" className="group">
                <Link href="/services/phone-repair">
                  Learn More{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1611396000732-f8c9a933424f?height=1000&width=800&text=Phone+Repair"
                  alt="Phone Repair Services"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <Smartphone className="h-10 w-10 text-primary mr-3" />
                  <div>
                    <h3 className="font-bold">iPhone & Android</h3>
                    <p className="text-sm text-muted-foreground">
                      All models supported
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <Wrench className="h-10 w-10 text-primary mr-3" />
                  <div>
                    <h3 className="font-bold">Expert Repairs</h3>
                    <p className="text-sm text-muted-foreground">
                      Certified technicians
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CCTV Installation - Special Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary text-white">
                Specialized Service
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                CCTV Installation & Security Solutions
              </h2>
              <p className="text-muted-foreground mb-6">
                We provide professional CCTV installation services, ensuring
                high-quality security solutions for homes, offices, and
                businesses. Our team specializes in setting up surveillance
                systems tailored to your security needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>High-definition CCTV cameras with night vision</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>Remote monitoring via mobile and web applications</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>Motion detection & alert notifications</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p>24/7 professional surveillance system setup</p>
                </div>
              </div>

              <Button asChild size="lg" className="group">
                <Link href="/services/cctv-monitoring">
                  Learn More{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600069620961-8bee77c2e28a?height=1000&width=800&text=CCTV+Installation"
                  alt="CCTV Installation Services"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <Video className="h-10 w-10 text-primary mr-3" />
                  <div>
                    <h3 className="font-bold">HD Security Cameras</h3>
                    <p className="text-sm text-muted-foreground">
                      Crystal-clear surveillance
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <Shield className="h-10 w-10 text-primary mr-3" />
                  <div>
                    <h3 className="font-bold">Advanced Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Reliable & efficient protection
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/80 text-primary-foreground py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Contact us today for a free consultation and discover how our IT
              solutions can help your business thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="font-medium"
                >
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/packages">Explore Custom Packages</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
