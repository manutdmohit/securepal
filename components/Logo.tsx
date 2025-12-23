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
    <Link href="/" className={` flex items-center ${className}`}>
      <div className={`relative ${sizes[size]}`}>
        <Image
          src="/images/1.png"
          alt="SecurePal"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
