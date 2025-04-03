import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaShareAlt,
  FaTiktok,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsMessenger } from 'react-icons/bs';

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/share/18iouTD75t/',
    bg: 'bg-blue-600',
  },
  {
    icon: <FaTiktok />,
    link: 'https://www.tiktok.com/@securepal',
    bg: 'bg-black/80',
  },
  //   {
  //     icon: <FaWhatsapp />,
  //     link: 'https://wa.me/1234567890',
  //     bg: 'bg-green-500',
  //   },
  //   { icon: <FaXTwitter />, link: 'https://twitter.com', bg: 'bg-black' },
  {
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/company/securepal/',
    bg: 'bg-blue-700',
  },
  //   { icon: <FaShareAlt />, link: '#', bg: 'bg-green-400' },
];

const SocialMediaBar = () => {
  return (
    <div>
      {/* Vertical on Large Screens, Bottom Fixed on Small Screens */}
      <div className="fixed left-0 top-1/4 z-50 hidden flex-col space-y-2 rounded-l-lg bg-blue-900 lg:flex">
        {socialLinks.map(({ icon, link, bg }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-12 w-12 items-center justify-center ${bg} text-white hover:opacity-80 transition`}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Horizontal Bar for Small Screens */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center space-x-2 bg-gray-900 py-2 lg:hidden">
        {socialLinks.map(({ icon, link, bg }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-12 w-12 items-center justify-center ${bg} text-white hover:opacity-80 transition rounded-full`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaBar;
