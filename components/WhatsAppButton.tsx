'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsappNumber } from '@/constants/phone';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show the button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = WhatsappNumber; // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in SecurePal's IT services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {isOpen && (
        <div className="mb-2 rounded-lg bg-white p-4 shadow-lg">
          <p className="mb-2 text-sm font-medium">Need help? Chat with us!</p>
          <Button asChild variant="default" className="w-full">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Start Chat
            </a>
          </Button>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-opacity-90 cursor-pointer"
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        <span className="sr-only">
          {isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        </span>
      </Button>
    </div>
  );
}
