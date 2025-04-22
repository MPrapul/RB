'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    requestType: 'inquiry', // 'inquiry', 'quote', 'bulk-order', 'custom'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real implementation, this would be an API call to submit the form
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        requestType: 'inquiry',
      });
      // After 5 seconds, reset success message
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
      
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded mb-6">
          <p className="font-medium">Thank you for contacting us!</p>
          <p>We've received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="requestType" className="block text-gray-700 font-medium mb-2">
              What can we help you with?
            </label>
            <select 
              id="requestType" 
              name="requestType" 
              value={formData.requestType}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="inquiry">General Inquiry</option>
              <option value="quote">Request a Quote</option>
              <option value="bulk-order">Bulk Order Inquiry</option>
              <option value="custom">Custom Gifting Solution</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="input w-full" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="input w-full" 
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="input w-full" 
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company
              </label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
                className="input w-full" 
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              className="input w-full" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="input w-full min-h-[150px]" 
              required 
            ></textarea>
          </div>
          
          {submitError && (
            <div className="bg-red-50 text-red-700 p-3 rounded mb-6">
              {submitError}
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
} 