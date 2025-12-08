"use client";
import React from 'react';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { images } from '../data/images';

// --- Types for the internal helper component ---
type GenericInfoPageProps = {
  title: string;
  heroImage: string;
  children: React.ReactNode;
};

// --- Helper Component: Generic Page Layout ---
// We keep this here to wrap the terms content consistently
const GenericInfoPage = ({ title, heroImage, children }: GenericInfoPageProps) => (
  <>
    <PageTitle title={title} />
    <main>
      <HeroSection
        title={title}
        subtitle="Our Policies"
        emphasis=""
        bgImage={heroImage}
      />
      <section className="py-16 lg:py-15 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* 'prose' gives nice default typography for text pages */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-7">{title}</h2>
            {children}
          </div>
        </div>
      </section>
    </main>
  </>
);

// --- MAIN PAGE EXPORT ---
export default function TermsPage() {
  return (
    <GenericInfoPage title="Terms & Conditions" heroImage={images.heroTerms}>
      <p className="text-base text-black leading-relaxed mb-10">Welcome to Explorer Backpackers! We are excited to have you stay with us and hope you enjoy your time in Johannesburg. To ensure a comfortable and safe stay for all guests, we have put together these Terms and Conditions. By making a booking with us, you agree to abide by these guidelines. We kindly request that you take a moment to review this information, as it contains important details about our policies regarding bookings, payments, cancellations, check-in/check-out procedures, guest conduct, and more. If you have any questions or concerns, please do not hesitate to contact us.</p>
      
      <h3 className="text-2xl font-extrabold text-black mb-5">Bookings and Payments</h3>
      <p className="text-base text-black  leading-relaxed mb-10">To secure your booking, a 100% deposit is required at the time of booking. We offer convenient online booking through our website or you can contact us directly via email or phone. Upon arrival, please present the original credit card used for the booking or provide a signed letter from the cardholder along with a copy of the card and a valid ID/Passport. We may request additional deposits to secure your reservation.</p>
      
      <h3 className="text-2xl font-extrabold text-black mb-5">Cancellation Policy (Individuals)</h3>
      <p className="text-base text-black  leading-relaxed mb-10">For individual bookings of 1 to 3 guests, cancellations made within 10 days of arrival, including no-shows, will be charged 100% of the deposit. Cancellations made 11-29 days before arrival will incur a 50% charge of the total stay, and cancellations made 30 or more days in advance will be subject to a 7% admin fee. Please note that refunds will be processed within 30-60 days and will not be issued in cash. All cancellations are subject to a 7% admin fee.</p>
      
      <h3 className="text-2xl font-extrabold text-black mb-5">Cancellation Policy (Groups)</h3>
      <p className="text-base text-black  leading-relaxed mb-10">For group bookings of 4 or more guests, cancellations made less than 29 days before arrival will be charged 100% of the total stay. Cancellations made 30-60 days before arrival will incur a 50% charge of the total stay. No-shows will be charged the full amount of the reservation. Refunds for cancellations will be processed within 30-60 days and will not be issued in cash. A 7% admin fee applies to all cancellations.</p>
      
      <h3 className="text-2xl font-extrabold text-black mb-5">Check-In and Check-Out</h3>
      <p className="text-base text-black  leading-relaxed mb-10">Check-in is available from 2:00 PM onwards. We kindly request that all guests check out by 10:00 AM to allow for thorough cleaning and preparation for incoming guests. Please be aware that specific room numbers cannot be guaranteed and are assigned on the day of arrival. For the safety and well-being of all guests, a health questionnaire and temperature check are mandatory upon arrival.</p>
      
      <h3 className="text-2xl font-extrabold text-black mb-5">Guest Policies</h3>
      <p className="text-base text-black  leading-relaxed mb-10">To ensure a comfortable stay for all, we have a few guest policies in place. Children under 16 years of age are welcome only when booking a Family/Private Room. Visitors are welcome in our public areas until 8:00 PM, as long as social distancing guidelines are followed. We provide lockers for your convenience; however, guests are responsible for bringing their own padlocks. Lost and found items can be retrieved at the reception desk with valid identification. Smoking is strictly prohibited inside the premises, and any damage to property will incur additional charges. Luggage storage is available for guests currently staying with us, for a maximum period of 30 days.</p>
      
      <h3 className="text-2xl font-extrabold text-black mb-5">Additional Information</h3>
      <p className="text-base text-black leading-relaxed mb-10">We strive to provide a clean and enjoyable environment for all guests. Towels can be rented for R50 per stay, and laundry services are available for your convenience. Our staff is committed to maintaining high standards of cleanliness and hygiene throughout the premises. We reserve the right to refuse service to anyone who does not comply with our policies.</p>
    </GenericInfoPage>
  );
}