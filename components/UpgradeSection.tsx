// components/UpgradeSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, CalendarDays, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function UpgradeSection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            🚀 Upgrade to Windows 11 with Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Microsoft ends support for Windows 10 on{' '}
            <strong>October 14, 2025</strong>. Stay protected and productive by
            upgrading today — we’ll handle everything for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="p-6 rounded-2xl bg-white shadow-sm border text-left">
            <ShieldCheck className="text-blue-600 mb-3" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Secure & Future-Ready
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Enjoy advanced protection with Windows 11’s built-in security
              features configured by experts.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border text-left">
            <AlertTriangle className="text-orange-500 mb-3" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Avoid Downtime Risks
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              No more updates or support after Oct 14, 2025. We ensure a
              seamless upgrade before the deadline.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border text-left">
            <CalendarDays className="text-green-600 mb-3" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Fully Managed Process
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              We handle backups, migrations, installations, and post-upgrade
              support — end to end.
            </p>
          </div>
        </div>

        <Button asChild size="lg" className="text-base px-6 py-4 rounded-xl">
          <Link href="/contact" className="flex items-center justify-center">
            📞 Book Your Free Consultation
          </Link>
        </Button>

        <p className="mt-6 text-sm text-gray-500">
          Don’t wait — ensure your system is secure and up-to-date before{' '}
          <strong>October 14, 2025</strong>.
        </p>
      </div>
    </section>
  );
}
