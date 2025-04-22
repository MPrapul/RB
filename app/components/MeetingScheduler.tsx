'use client';

import { useState } from 'react';

export default function MeetingScheduler() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    topic: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real implementation, this would be an API call to schedule the meeting
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      setSubmitSuccess(true);
      setFormData({
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        topic: '',
      });
      
      // After 5 seconds, reset success message
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('There was a problem scheduling your meeting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  // Get tomorrow's date as the minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Schedule a Meeting</h2>
      
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded mb-6">
          <p className="font-medium">Meeting scheduled successfully!</p>
          <p>We'll send you a confirmation email with meeting details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={minDate}
                value={formData.date}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                Preferred Time
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="input w-full"
                required
              >
                <option value="">Select a time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
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
              Email Address
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

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">
              Meeting Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="input w-full"
              placeholder="Brief description of what you'd like to discuss"
              required
            />
          </div>

          {submitError && (
            <div className="bg-red-50 text-red-700 p-3 rounded">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
          </button>
        </form>
      )}
    </div>
  );
} 