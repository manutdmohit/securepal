'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingPage = () => {
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
        toast.error(data.error || 'Failed to submit request.', {
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
    <section className="min-h-screen bg-[#F8FAFC] py-20 px-6 flex flex-col items-center">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1D4ED8]">Pricing & Plans</h1>
        <p className="text-lg text-[#334155] max-w-2xl mx-auto mt-2">
          Choose the right plan for your business. We offer flexible pricing
          based on your specific needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Basic Plan */}
        <Card className="shadow-lg border border-[#CBD5E1] rounded-lg">
          <CardHeader className="py-5 bg-[#1D4ED8] text-white text-center">
            <CardTitle className="text-xl font-semibold">
              Basic Package
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-[#1E293B]">
              Custom Pricing
            </p>
            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>✅ Essential services included</li>
              <li>✅ Email & chat support</li>
              <li>✅ Basic reporting</li>
            </ul>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card className="shadow-lg border border-[#CBD5E1] rounded-lg">
          <CardHeader className="py-5 bg-[#1E40AF] text-white text-center">
            <CardTitle className="text-xl font-semibold">Pro Package</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-[#1E293B]">
              Custom Pricing
            </p>
            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>✅ Everything in Basic</li>
              <li>✅ Advanced analytics & insights</li>
              <li>✅ Priority support</li>
            </ul>
          </CardContent>
        </Card>

        {/* Enterprise Plan */}
        <Card className="shadow-lg border border-[#CBD5E1] rounded-lg">
          <CardHeader className="py-5 bg-[#172554] text-white text-center">
            <CardTitle className="text-xl font-semibold">
              Enterprise Package
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-[#1E293B]">
              Custom Pricing
            </p>
            <ul className="mt-4 space-y-2 text-[#334155]">
              <li>✅ Fully customized solutions</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ 24/7 premium support</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Cost Breakdown */}
      <div className="max-w-4xl text-left bg-white shadow-lg p-8 mt-16 border border-[#CBD5E1] rounded-lg">
        <h2 className="text-2xl font-bold text-[#1E293B]">Cost Breakdown</h2>
        <p className="text-[#334155] mt-4">
          We ensure transparent pricing with no hidden fees. Contact us to get a
          tailored quote.
        </p>
        <ul className="mt-4 space-y-2 text-[#1E293B]">
          <li>🔹 One-time setup fees may apply</li>
          <li>🔹 Monthly or annual plans available</li>
          <li>🔹 Custom solutions based on business needs</li>
        </ul>
      </div>

      {/* Payment Terms & Conditions */}
      <div className="max-w-4xl text-left bg-white shadow-lg p-8 mt-10 border border-[#CBD5E1] rounded-lg">
        <h2 className="text-2xl font-bold text-[#1E293B]">
          Payment Terms & Conditions
        </h2>
        <p className="text-[#334155] mt-4">
          - Payments are due as per agreed terms. <br /> - Late payments may
          incur additional charges. <br />- Subscription cancellations require
          prior notice as per the agreed policy.’ notice**.
        </p>
      </div>

      {/* Get a Quote Form */}
      <Card className="w-full max-w-3xl mt-16 bg-white shadow-lg border border-[#CBD5E1] rounded-lg">
        <CardHeader className="py-5 border-b border-[#CBD5E1] bg-[#1D4ED8] text-white">
          <CardTitle className="text-xl font-semibold text-center">
            Get Your Quote
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'fullName', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'company', label: 'Company (Optional)', type: 'text' },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-[#1E293B] font-medium mb-2"
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
                    className="w-full border border-[#CBD5E1] focus:border-[#3B82F6] focus:ring-[#3B82F6] transition rounded-md"
                  />
                </div>
              ))}
            </div>

            <div>
              <label
                className="block text-[#1E293B] font-medium mb-2"
                htmlFor="securityNeeds"
              >
                Describe Your Service Needs
              </label>
              <Textarea
                id="securityNeeds"
                name="securityNeeds"
                rows={4}
                value={formData.securityNeeds}
                onChange={handleChange}
                required
                className="w-full border border-[#CBD5E1] focus:border-[#3B82F6] focus:ring-[#3B82F6] transition rounded-md"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={submitting}
                className="w-3/4 md:w-1/2 bg-[#3B82F6] hover:bg-[#1D4ED8] text-white text-lg py-3 rounded-md transition-all"
              >
                {submitting ? 'Submitting...' : 'Request Quote'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default PricingPage;
