"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { PageTitle } from '../components/PageTitle'; // Adjust import path (../../)
import { HeroSection } from '../components/HeroSection';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { FormTextarea } from '../components/FormTextarea';
import { images } from '../data/images';

// 1. Export Default
export default function ContactPage() {
  const router = useRouter(); // 2. Use Router hook
  const [formData, setFormData] = useState({
    access_key: '5a445992-01ad-4adf-8c04-e7ddabad7b6d',
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Message': ''
  });
  const [result, setResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('Submitting....');
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(formData)
    }).then((res) => res.json());

    if (res.success) {
      setResult('Form submitted successfully!');
      setFormData({
        access_key: '5a445992-01ad-4adf-8c04-e7ddabad7b6d',
        'First Name': '',
        'Last Name': '',
        'Email': '',
        'Message': ''
      });
      // 3. Use router.push instead of navigateTo
      setTimeout(() => router.push('/thank-you'), 2000);
    } else {
      setResult('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <PageTitle title="Contact" />
      <main>
        <HeroSection
          title="Contact Us"
          subtitle=""
          emphasis="We're Here to Help"
          bgImage={images.heroContact}
        />
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-10">
                We're Here to Connect! Share your travel stories, inquire about our services, or seek assistance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-black shrink-0">
                    <img src={images.iconPhone} alt="Phone" className="w-[26px] h-[26px]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+27711370207" className="text-green-600 hover:text-green-700 text-base">+27 71 137 0207</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-black shrink-0">
                    <img src={images.iconMail} alt="Email" className="w-[26px] h-[26px]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                    <a href="mailto:bookings@explorerbackpackers.com" className="text-green-600 hover:text-green-700 text-base">bookings@explorerbackpackers.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-black shrink-0">
                    <img src={images.iconLocation} alt="Location" className="w-[26px] h-[26px]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                    <a href="#map" className="text-gray-600 text-base">27 7th Street, Parkhurst, Randburg, Johannesburg, South Africa</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <FormInput label="First Name" name="First Name" placeholder="e.g. Kat" value={formData['First Name']} onChange={handleChange} required />
                    <FormInput label="Last Name" name="Last Name" placeholder="e.g. Jones" value={formData['Last Name']} onChange={handleChange} required />
                  </div>
                  <FormInput label="Email" name="Email" type="email" placeholder="e.g. example@email.com" value={formData['Email']} onChange={handleChange} required />
                  <FormTextarea label="Message" name="Message" placeholder="Type your message here" value={formData['Message']} onChange={handleChange} required />
                  <Button type="submit" className="w-full text-sm">Submit</Button>
                  {result && <p className="mt-4 text-center text-gray-600">{result}</p>}
                </form>
              </div>
            </div>
          </div>
          
          <div id="map" className="container mx-auto px-4 mt-16">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6713972110297!2d28.01463507574816!3d-26.142255161454514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b6f127a34db%3A0x2d1c32597d863573!2sExplorer%20Backpackers!5e0!3m2!1sen!2sza!4v1720373336580!5m2!1sen!2sza" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}