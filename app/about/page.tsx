'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, ImageOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2 items-center">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 text-2xl">
              About Us
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              Your Trusted IT Partner 🚀
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              **SecurePal** is a leading **Managed Service Provider (MSP)**
              offering cutting-edge **IT solutions, cybersecurity, cloud
              services, and web hosting** for businesses worldwide.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="relative h-[420px] rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/secure-pal-logo.png" // Replace with actual team photo
              alt="SecurePal Team"
              fill
              className="object-cover"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            {/* <ImageOff className="w-20 h-20 text-gray-400 absolute" /> */}
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-28 bg-gray-50 mx-auto">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4">
            Our Mission
          </Badge>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Empowering Businesses Through Technology
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide businesses with **reliable, secure, and innovative IT
            solutions** that foster growth and success in a rapidly evolving
            digital landscape.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3 place-content-center">
            {[
              {
                title: 'Reliability',
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                description:
                  'Providing **24/7/365** IT services with unmatched dependability.',
              },
              {
                title: 'Excellence',
                icon: <Award className="h-8 w-8 text-primary" />,
                description:
                  'Striving for **technical and service excellence** in every solution.',
              },
              {
                title: 'Partnership',
                icon: <Users className="h-8 w-8 text-primary" />,
                description:
                  'Building **long-term relationships** as an extension of your team.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Meet the Experts
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center shadow-md">
                  <Image
                    src={`/team-${i}.jpg`} // Replace with actual team images
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                  <Users className="w-20 h-20 text-gray-400 absolute" />
                </div>
                <h3 className="text-xl font-semibold">Team Member {i}</h3>
                <p className="text-primary">IT Specialist</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Expert in **network security & cloud computing**.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Work With Us? 🚀
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            **Let's secure your business future.** Get in touch with our IT
            specialists today.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
