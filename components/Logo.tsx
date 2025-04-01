'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: 'w-12 h-12', // 48px
    md: 'w-20 h-20', // 80px
    lg: 'w-20 h-20', // 80px
  };

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className={`relative ${sizes[size]}`}>
        <Image
          src="/images/1.png"
          alt="SecurePal Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="md:hidden text-sm text-white/90 font-semibold ml-12">
        SecurePal. Complete IT Solution
      </span>
    </Link>
  );
}
