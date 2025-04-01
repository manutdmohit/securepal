'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({
  showText = true,
  size = 'md',
  className = '',
}: LogoProps) {
  // Increased dimensions for better visibility
  const dimensions = {
    sm: { width: 40, height: 40, textClass: 'text-lg' },
    md: { width: 80, height: 80, textClass: 'text-xl' },
    lg: { width: 100, height: 100, textClass: 'text-2xl' },
  };

  const { width, height, textClass } = dimensions[size];

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="">
        <Image
          src="/images/logo.png"
          alt="SecurePal Logo"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={`lg:hidden font-bold ${textClass} whitespace-nowrap`}>
          SecurePal
        </span>
      )}
    </Link>
  );
}
