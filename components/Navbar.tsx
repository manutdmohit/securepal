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

import { services, extraServices } from '@/components/ServicesHelper';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = '+123456789'; // Replace with actual phone number
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#094C7C] text-primary-foreground ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container flex h-22 lg:h-auto items-center justify-between">
        <div className="flex-shrink-0 py-2">
          <Logo size="md" className="text-primary-foreground" />
        </div>

        <div className="hidden lg:block">
          <NavigationMenu className="text-primary-foreground">
            <NavigationMenuList>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services', hasSubmenu: true },
                {
                  name: 'Extra Services',
                  href: '/extra-services',
                  hasSubmenu: true,
                },
                { name: 'Custom Packages', href: '/packages' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasSubmenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] p-4 md:w-[500px] lg:w-[600px] grid-cols-2">
                          {item.name === 'Services'
                            ? services.map((service) => (
                                <li key={service.name}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={service.href}
                                      className="block p-3 font-bold rounded-md text-primary hover:bg-accent"
                                    >
                                      {service.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))
                            : item.name === 'Extra Services' &&
                              extraServices.map((service) => (
                                <li key={service.name}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={service.href}
                                      className="block p-3 font-bold rounded-md text-primary hover:bg-accent"
                                    >
                                      {service.name}
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
                        className={`px-4 py-2 rounded-md transition-colors ${
                          pathname === item.href
                            ? 'bg-primary-foreground/20'
                            : ''
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

        <div className="hidden lg:flex items-center space-x-4">
          <a href={`tel:${phoneNumber}`} className="flex items-center text-sm">
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden xl:inline">{phoneNumber}</span>
          </a>
          <Button
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/80"
          >
            <Link href="/packages/request-quote">Get a Quote</Link>
          </Button>
        </div>

        <span className="md:hidden text-sm text-white/90 font-bold">
          COMPLETE IT SOLUTION
        </span>
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <Button size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`fixed right-0 top-0 bottom-0 w-[85vw] max-w-[350px] bg-[#094C7C] text-primary-foreground p-6 transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <Logo size="md" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Scrollable Menu */}
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-250px)] pr-2">
                <Link
                  href="/"
                  className={`text-lg ${pathname === '/' ? 'font-bold' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-lg ${
                    pathname === '/about' ? 'font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Services</span>
                  <div className="grid gap-2 pl-4 border-l">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`text-base ${
                          pathname === service.href ? 'font-medium' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Extra Services</span>
                  <div className="grid gap-2 pl-4 border-l">
                    {extraServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`text-base ${
                          pathname === service.href ? 'font-medium' : ''
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
                  className={`text-lg ${
                    pathname === '/packages' ? 'font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Custom Packages
                </Link>
                <Link
                  href="/pricing"
                  className={`text-lg ${
                    pathname === '/pricing' ? 'font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/testimonials"
                  className={`text-lg ${
                    pathname === '/testimonials' ? 'font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/blog"
                  className={`text-lg ${
                    pathname === '/blog' ? 'font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg ${
                    pathname === '/contact' ? 'font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Phone and Quote Button */}
              <div className="mt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" /> {phoneNumber}
                </a>
                <Button
                  asChild
                  className="my-2 w-full bg-white hover:bg-white/80 text-primary"
                >
                  <Link href="/packages/request-quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
