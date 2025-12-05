'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-gray-100">{t('submit')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
              {t('name')}
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-charcoal-800 border-charcoal-700 text-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              {t('email')}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-charcoal-800 border-charcoal-700 text-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
              {t('phone')}
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-charcoal-800 border-charcoal-700 text-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
              {t('message')}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="bg-charcoal-800 border-charcoal-700 text-gray-200 focus:border-primary-500 focus:ring-primary-500/20"
            />
          </div>
          {status === 'success' && (
            <div className="p-3 bg-green-900/50 border border-green-500/30 text-green-400 rounded-md text-sm">
              {t('success')}
            </div>
          )}
          {status === 'error' && (
            <div className="p-3 bg-red-900/50 border border-red-500/30 text-red-400 rounded-md text-sm">
              {t('error')}
            </div>
          )}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? t('sending') : t('submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

