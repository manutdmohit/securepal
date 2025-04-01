'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';
import { toast } from 'sonner';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          'Message sent successfully! We will get back to you shortly.',
          {
            duration: 5000, // Adjust the duration as needed (in milliseconds)
            position: 'top-right', // Adjust the position as needed
            style: {
              borderRadius: '10px',
              background: '#e6f7e6', // light green background
              color: '#389e0d', // dark green text
              border: '1px solid #b7eb8f',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            },
            icon: '✅', // Or a custom icon component
          }
        );
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.', {
          duration: 5000,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#fff0f0', // light red background
            color: '#cf1322', // dark red text
            border: '1px solid #ffa39e',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          },
          icon: '❌', // Or a custom icon component
        });
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again later.', {
        duration: 5000,
        position: 'top-right',
        style: {
          borderRadius: '10px',
          background: '#fffbe6', // light yellow background
          color: '#d48806', // dark yellow text
          border: '1px solid #ffe58f',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        },
        icon: '⚠️', // Or a custom icon component
      });
    } finally {
      setSubmitting(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-primary mb-4">
            Contact Secure Pal
          </h1>
          <p className="text-gray-600 text-lg">
            Get in touch with us for personalized security solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-primary mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <p className="text-gray-700">
                    Address: 133 10 park road, Hurstville NSW 2220
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <p className="text-gray-700">0450506907, 0451533354</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <p className="text-gray-700">support@securepal.com.au</p>
                </motion.div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.0127794350474!2d151.10369607474922!3d-33.96651102412466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b9bd3862cf95%3A0xe6d05bae38b009c9!2sSuite%20133%2F10%20Park%20Rd%2C%20Hurstville%20NSW%202220%2C%20Australia!5e0!3m2!1sen!2snp!4v1743497139026!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-primary mb-8">
              Send Us a Secure Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['fullName', 'email', 'phone'].map((field) => (
                <motion.div key={field} whileHover={{ scale: 1.01 }}>
                  <label
                    htmlFor={field}
                    className="block text-gray-700 font-medium mb-2 capitalize"
                  >
                    {field.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    type={
                      field === 'email'
                        ? 'email'
                        : field === 'phone'
                        ? 'tel'
                        : 'text'
                    }
                    id={field}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/80 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                disabled={submitting}
              >
                <FaPaperPlane className="text-sm" />
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
