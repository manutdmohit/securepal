'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Phone, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';

const services = [
  { name: 'Full Service Package', href: '/services/full-service' },
  { name: 'Website Design', href: '/services/website-design' },
  { name: 'Website Hosting', href: '/services/website-hosting' },
  { name: 'Router Installation', href: '/services/router-installation' },
  { name: '24/7 IT Support', href: '/services/it-support' },
  { name: 'VoIP Setup', href: '/services/voip-setup' },
  { name: 'CCTV Monitoring', href: '/services/cctv-monitoring' },
  { name: 'Professional Email', href: '/services/email-services' },
  { name: 'Computer Repair', href: '/services/computer-repair' },
  { name: 'Data Backup', href: '/services/data-backup' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
  { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = '+123456789'; // Replace with actual phone number
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-[#124980] text-primary-foreground ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex-shrink-0">
          <Logo size="md" className="text-primary-foreground" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu className="text-primary-foreground">
            <NavigationMenuList>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services', hasSubmenu: true },
                { name: 'Custom Packages', href: '/packages' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasSubmenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 focus:bg-primary-foreground/10">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {services.map((service) => (
                            <li key={service.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {service.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                          pathname === item.href
                            ? 'bg-primary-foreground/20'
                            : 'bg-transparent'
                        }`}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
          >
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden xl:inline">{phoneNumber}</span>
          </a>
          <Button
            asChild
            size="sm"
            className="whitespace-nowrap bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <a
            href={`tel:${phoneNumber}`}
            className="mr-4 p-2 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
          >
            <Phone className="h-5 w-5" />
            <span className="sr-only">Call us</span>
          </a>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`fixed right-0 top-0 bottom-0 w-[85vw] max-w-[350px] bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 shadow-xl transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <Logo size="md" className="text-primary-foreground" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col gap-5 overflow-y-auto max-h-[calc(100vh-120px)]">
                <Link
                  href="/"
                  className={`text-lg font-medium hover:text-primary-foreground/80 transition-colors ${
                    pathname === '/' ? 'text-white font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-lg font-medium hover:text-primary-foreground/80 transition-colors ${
                    pathname === '/about' ? 'text-white font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <div className="flex flex-col gap-3">
                  <div className="text-lg font-medium">Services</div>
                  <div className="grid grid-cols-1 gap-3 pl-4 border-l border-primary-foreground/20">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`text-base hover:text-primary-foreground/80 transition-colors ${
                          pathname === service.href
                            ? 'text-white font-medium'
                            : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/packages"
                  className={`text-lg font-medium hover:text-primary-foreground/80 transition-colors ${
                    pathname === '/packages' ? 'text-white font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Custom Packages
                </Link>
                <Link
                  href="/pricing"
                  className={`text-lg font-medium hover:text-primary-foreground/80 transition-colors ${
                    pathname === '/pricing' ? 'text-white font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/testimonials"
                  className={`text-lg font-medium hover:text-primary-foreground/80 transition-colors ${
                    pathname === '/testimonials' ? 'text-white font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/blog"
                  className={`text-lg font-medium hover:text-primary-foreground/80 transition-colors ${
                    pathname === '/blog' ? 'text-white font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium hover:text-primary-foreground/80 transition-colors ${
                    pathname === '/contact' ? 'text-white font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center text-lg font-medium hover:text-primary-foreground/80 transition-colors"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    <span>{phoneNumber}</span>
                  </a>

                  <Button
                    asChild
                    className="mt-6 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
