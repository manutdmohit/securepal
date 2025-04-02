'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PhoneButton() {
  const phoneNumber = '+610450506907'; // Replace with actual phone number

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-primary/90"
      >
        <a href={`tel:${phoneNumber}`} aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}
