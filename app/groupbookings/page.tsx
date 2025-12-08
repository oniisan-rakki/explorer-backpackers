"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { FormTextarea } from '../components/FormTextarea';
import { images } from '../data/images';

export default function GroupBookingsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    access_key: '5a445992-01ad-4adf-8c04-e7ddabad7b6d',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // Handle checkboxes
    const isCheckbox = type === 'checkbox';
    const checkedValue = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? checkedValue : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.Acceptance) {
      setResult('You must agree to the terms to submit.');
      return;
    }
    setResult('Submitting....');
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json());

    if (res.success) {
      setResult('Form submitted successfully!');
      // Reset form (optional)
      // setTimeout(() => router.push('/thankyou'), 2000); 
    } else {
      setResult('An error occurred. Please try again.');
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <FormInput label="Check In" name="Check In" type="date" value={formData['Check In']} onChange={handleChange} required />
                  <FormInput label="Check Out" name="Check Out" type="date" value={formData['Check Out']} onChange={handleChange} required />
                </div>
                <FormInput label="Number of People" name="Number of People" type="number" min="5" max="35" placeholder="e.g. 10" value={formData['Number of People']} onChange={handleChange} required />
                
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

                <Button type="submit" className="w-full text-sm !mt-8">Submit</Button>
                {result && <p className="mt-4 text-center text-gray-600">{result}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}