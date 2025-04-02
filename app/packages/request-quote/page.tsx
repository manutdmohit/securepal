'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CustomQuote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    securityNeeds: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/custom-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Quote request submitted successfully!', {
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
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          securityNeeds: '',
        });
      } else {
        toast.error(
          data.error || 'Failed to submit request. Please try again.',
          {
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
          }
        );
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.', {
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

  return (
    <section className="relative min-h-screen bg-gradient-to-r  text-white py-20 px-6 md:px-12 lg:px-24">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 opacity-25 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-extrabold tracking-wide text-primary">
          Get Your Custom Quote
        </h2>
        <p className="mt-4 text-lg text-primary font-bold max-w-3xl mx-auto text-left">
          Tailor-made security solutions designed specifically for your needs.
          Fill in the details below, and we'll get back to you with a
          personalized quote.
        </p>
      </motion.div>

      <motion.div
        className="relative mt-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-white text-gray-900 shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-primary/80 text-white py-4">
            <CardTitle className="text-xl font-semibold text-center">
              Request a Quote
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'fullName', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'company', label: 'Company (Optional)', type: 'text' },
              ].map((field) => (
                <motion.div key={field.name} whileHover={{ scale: 1.02 }}>
                  <label
                    className="block text-gray-800 font-medium mb-2"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.name !== 'company'}
                    className="mx-auto w-3/4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                  />
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.02 }}>
                <label
                  className="block text-gray-800 font-medium mb-2"
                  htmlFor="securityNeeds"
                >
                  Describe Your Security Needs
                </label>
                <Textarea
                  id="securityNeeds"
                  name="securityNeeds"
                  rows={4}
                  value={formData.securityNeeds}
                  onChange={handleChange}
                  required
                  className="mx-auto w-3/4 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-1/2 bg-blue-600 hover:bg-blue-700 transition-all text-lg py-7 rounded-lg shadow-md"
                >
                  {submitting ? 'Submitting...' : 'Request Quote'}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default CustomQuote;
