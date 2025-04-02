import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Server,
  HelpCircle,
  FileText,
  Clock,
  Instagram,
} from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#094C7C] text-white">
      <div className="container mx-auto place-items-center py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo size="md" className="text-white" />
            <p className="text-white/80 max-w-xs">
              Your trusted partner for comprehensive IT solutions,
              cybersecurity, cloud services, and website hosting.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574213761720"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/full-service"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Server className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Full Service Package</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-design"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Globe className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Website Design</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Shield className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Cybersecurity Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-support"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <HelpCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>24/7 IT Support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Server className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Cloud Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>View All Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <a
                    href="tel:+61450506907"
                    className="text-white hover:underline transition-colors text-[12px]"
                  >
                    +61 (450) 506907
                  </a>

                  {', '}
                  <a
                    href="tel:+61451533354"
                    className="text-white hover:underline transition-colors text-[12px]"
                  >
                    +61 (451) 533354
                  </a>
                  <p className="text-sm text-white/70 mt-1">Mon-Fri: 9am-6pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <a
                    href="mailto:info@securepal.com.au"
                    className="text-white hover:underline transition-colors"
                  >
                    info@securepal.com.au
                  </a>
                  <p className="text-sm text-white/70 mt-1">
                    We&apos;ll respond promptly
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <p className="text-white">
                    Address: 133 10 park road, Hurstville NSW 2220
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Visit during business hours
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-white/90" />
                <div>
                  <p className="text-white">Business Hours</p>
                  <p className="text-sm text-white/70 mt-1">Mon-Fri: 9am-6pm</p>
                  <p className="text-sm text-white/70">Sat: 10am-2pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} SecurePal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
