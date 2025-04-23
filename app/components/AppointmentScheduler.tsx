'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

type Day = {
  date: string;
  dayOfWeek: string;
  dayOfMonth: number;
  timeSlots: TimeSlot[];
};

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate some sample days and time slots
  const generateDays = (): Day[] => {
    const days: Day[] = [];
    const today = new Date();
    
    // Skip Sunday (today.getDay() === 0)
    if (today.getDay() === 0) {
      today.setDate(today.getDate() + 1);
    }
    
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays
      if (date.getDay() === 0) {
        continue;
      }
      
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day: Day = {
        date: date.toISOString().split('T')[0],
        dayOfWeek: dayNames[date.getDay()],
        dayOfMonth: date.getDate(),
        timeSlots: []
      };
      
      // Generate time slots from 9 AM to 5 PM
      const startHour = 9;
      const endHour = 17;
      
      for (let hour = startHour; hour < endHour; hour++) {
        const time = `${hour}:00`;
        const displayTime = `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
        
        day.timeSlots.push({
          id: `${day.date}-${time}`,
          time: displayTime,
          available: Math.random() > 0.3 // Randomly make some slots unavailable
        });
      }
      
      days.push(day);
    }
    
    return days;
  };

  const days = generateDays();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
      // Reset form
      setSelectedDate(null);
      setSelectedTime(null);
      setName('');
      setEmail('');
      setPhone('');
      setPurpose('');
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      alert('There was an error scheduling your appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedDay = () => {
    return days.find(day => day.date === selectedDate);
  };

  const getAvailableTimeSlots = () => {
    const day = getSelectedDay();
    return day ? day.timeSlots.filter(slot => slot.available) : [];
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-6 rounded-lg text-center"
      >
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="text-xl font-bold mb-2">Appointment Scheduled!</h3>
        <p className="mb-4">Thank you for scheduling a consultation with us. We'll send you a confirmation email shortly.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          Schedule Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Date Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-3">
          Select a Date
        </label>
        <div className="grid grid-cols-5 gap-2">
          {days.map(day => (
            <button
              key={day.date}
              type="button"
              className={`
                p-3 rounded-lg text-center transition-all duration-200
                ${selectedDate === day.date 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }
              `}
              onClick={() => {
                setSelectedDate(day.date);
                setSelectedTime(null);
              }}
            >
              <div className="text-xs font-semibold">{day.dayOfWeek.substring(0, 3)}</div>
              <div className="text-lg font-bold mt-1">{day.dayOfMonth}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mb-6 overflow-hidden"
        >
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-3">
            Select a Time
          </label>
          <div className="grid grid-cols-3 gap-2">
            {getAvailableTimeSlots().map(slot => (
              <button
                key={slot.id}
                type="button"
                className={`
                  p-3 rounded-lg text-center transition-all duration-200
                  ${selectedTime === slot.id 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }
                `}
                onClick={() => setSelectedTime(slot.id)}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Contact Information */}
      {selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Purpose of Meeting
            </label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            >
              <option value="">Select a purpose</option>
              <option value="corporate">Corporate Gifting</option>
              <option value="personal">Personal Gifting</option>
              <option value="bulk">Bulk Order Discussion</option>
              <option value="custom">Custom Gifting Solutions</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
          </button>
        </motion.div>
      )}
    </form>
  );
};

export default AppointmentScheduler; 