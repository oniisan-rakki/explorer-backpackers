"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { FormTextarea } from '../components/FormTextarea';
import { images } from '../data/images';
import { submitGroupBooking } from '../lib/api'; 

export default function GroupBookingsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    'First Name': '',
    'Last Name': '',
    'Company': '',
    'Address': '',
    'Email': '',
    'Check In': '',
    'Check Out': '',
    'Number of People': '',
    'Breakfast': 'no',
    'Special Request': '',
    'Acceptance': false,
  });
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 1. Get today's date in YYYY-MM-DD format to restrict past dates
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checkedValue = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? checkedValue : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');

    // 1. Validation: Terms
    if (!formData.Acceptance) {
      setResult('You must agree to the terms to submit.');
      return;
    }

    // 2. Validation: Group Size (5 - 35)
    const guests = parseInt(formData['Number of People']);
    if (isNaN(guests) || guests < 5 || guests > 35) {
      setResult('Group size must be between 5 and 35 people.');
      return;
    }

    // 3. Calculation: Nights (Required for invoice logic)
    const d1 = new Date(formData['Check In']);
    const d2 = new Date(formData['Check Out']);
    
    if (d2 <= d1) {
      setResult('Check-out date must be after check-in date.');
      return;
    }

    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    // --- UPDATED LOADING TEXT ---
    setIsLoading(true);
    setResult('Generating Invoice...');

    try {
      // 4. Map Your Form Data to Backend Expectations
      const payload = {
        firstName: formData['First Name'],
        lastName: formData['Last Name'],
        email: formData['Email'],
        phone: '', 
        guests: guests,
        nights: nights,
        checkIn: formData['Check In'],
        checkOut: formData['Check Out'],
        company: formData['Company'],
        address: formData['Address'],
        breakfast: formData['Breakfast'],
        additionalInfo: formData['Special Request'],
        roomType: 'Group Booking' 
      };

      // 5. Send to Backend
      await submitGroupBooking(payload);

      setResult('Form submitted successfully! Check your email for the invoice.');
      
      // Optional: Reset form or redirect
      // setTimeout(() => router.push('/'), 3000);

    } catch (error) {
      console.error(error);
      setResult('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <PageTitle title="Group Bookings" />
      <main>
        <HeroSection
          title="Rates for Groups"
          subtitle="Group Bookings"
          emphasis="At Explorer Backpackers"
          buttonText="Fill Form"
          onButtonClick={() => document.getElementById('groupBookingsPage')?.scrollIntoView({ behavior: 'smooth' })}
          bgImage={images.heroGroup}
        />
        <section id="groupBookingsPage" className="py-16 lg:py-24 bg-gray-50 flex justify-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Group Bookings</h2>
              <p className="text-gray-600 text-center mb-8">
                Fill out this quick form, receive an invoice once you have completed the form and we will be in touch to confirm your booking with us.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <FormInput label="First Name" name="First Name" placeholder="e.g. Kat" value={formData['First Name']} onChange={handleChange} required />
                  <FormInput label="Last Name" name="Last Name" placeholder="e.g. Jones" value={formData['Last Name']} onChange={handleChange} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <FormInput label="Company (Optional)" name="Company" placeholder="e.g. Kat's Business" value={formData['Company']} onChange={handleChange} />
                  <FormInput label="Address (Optional)" name="Address" placeholder="e.g. 123 Street Name..." value={formData['Address']} onChange={handleChange} />
                </div>
                <FormInput label="Email" name="Email" type="email" placeholder="e.g. example@email.com" value={formData['Email']} onChange={handleChange} required />
                
                {/* Updated Date Inputs with Min Date Restriction */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <FormInput 
                    label="Check In" 
                    name="Check In" 
                    type="date" 
                    min={today} // Restrict past dates
                    value={formData['Check In']} 
                    onChange={handleChange} 
                    required 
                  />
                  <FormInput 
                    label="Check Out" 
                    name="Check Out" 
                    type="date" 
                    min={formData['Check In'] || today} // Ensure check-out is after check-in
                    value={formData['Check Out']} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <FormInput 
                  label="Number of People (5 - 35)" 
                  name="Number of People" 
                  type="number" 
                  min="5" 
                  max="35" 
                  placeholder="e.g. 10" 
                  value={formData['Number of People']} 
                  onChange={handleChange} 
                  required 
                />
                
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Breakfast (Optional)</span>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="Breakfast" value="yes" checked={formData.Breakfast === 'yes'} onChange={handleChange} className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="Breakfast" value="no" checked={formData.Breakfast === 'no'} onChange={handleChange} className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <FormTextarea label="Message or Special Request" name="Special Request" placeholder="Type your message here" value={formData['Special Request']} onChange={handleChange} />
                
                <div>
                  <label className="flex items-start">
                    <input type="checkbox" name="Acceptance" checked={formData.Acceptance} onChange={handleChange} required className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded mt-1" />
                    <span className="ml-2 text-sm text-gray-600">By clicking this you agree to Explorer Backpackers Privacy Policy, that this is not an agreement between Explorer Backpackers and you, and communication via email.</span>
                  </label>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full text-sm !mt-8">
                  {isLoading ? 'Generating Invoice...' : 'Submit'}
                </Button>
                
                {result && (
                  <p className={`mt-4 text-center ${result.includes('successfully') ? 'text-green-600 font-bold' : (result === 'Generating Invoice...' ? 'text-blue-600' : 'text-red-600')}`}>
                    {result}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}