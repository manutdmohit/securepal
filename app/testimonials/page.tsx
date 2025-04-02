'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'CEO, Tech Innovators',
    feedback:
      'SecurePal provided top-notch security solutions tailored to our business needs. Their team is professional, reliable, and proactive!',
    image: '/avatars/emily.jpg',
  },
  {
    name: 'David Miller',
    role: 'Operations Manager, SafeCorp',
    feedback:
      'We’ve never felt safer! SecurePal’s team is dedicated and highly skilled, ensuring our premises remain secure at all times.',
    image: '/avatars/david.jpg',
  },
  {
    name: 'Sophia Patel',
    role: 'Founder, ShieldTech',
    feedback:
      'The level of professionalism and expertise from SecurePal is unmatched. Their security assessments helped us identify critical risks.',
    image: '/avatars/sophia.jpg',
  },
  {
    name: 'James Anderson',
    role: 'Director, Anderson Enterprises',
    feedback:
      'From consultation to execution, SecurePal exceeded our expectations. We now have a robust security system in place!',
    image: '/avatars/james.jpg',
  },
];

const TestimonialsPage = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Real feedback from businesses and individuals who trust SecurePal.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="shadow-lg bg-white border border-gray-200 rounded-lg p-6">
              <CardHeader className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-md italic">
                  “{testimonial.feedback}”
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsPage;
