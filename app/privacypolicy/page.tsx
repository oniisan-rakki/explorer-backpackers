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
// We keep this here to wrap the privacy content consistently
const GenericInfoPage = ({ title, heroImage, children }: GenericInfoPageProps) => (
  <>
    <PageTitle title={title} />
    <main>
      <HeroSection
        title={title}
        subtitle="Our Commitment"
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
export default function PrivacyPolicyPage() {
  return (
    <GenericInfoPage title="Privacy Policy" heroImage={images.heroPrivacy}>
      <p className="text-base text-black leading-relaxed mb-10">Thank you for choosing Explorer Backpackers. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. We prioritize the protection of your privacy and ensure compliance with applicable data protection laws. By using our website or services, you consent to the practices described in this Privacy Policy.</p>
      
      <h3 className="text-2xl font-extrabold text-black mb-5">Use of Collected Information</h3>
      <p className="text-base text-black leading-relaxed mb-5">We may use the information we collect for various purposes, including but not limited to:</p>
      <ul className="text-base text-black leading-relaxed mb-10 list-disc pl-5">
        <li>Providing and personalizing our services to enhance your experience.</li>
        <li>Communicating with you regarding updates, promotions, and news about Explorer Backpackers.</li>
        <li>Improving our website and services based on your feedback and usage patterns.</li>
        <li>Responding to inquiries and providing customer support.</li>
        <li>Protecting against potential fraud or illegal activities.</li>
        <li>Complying with legal obligations and enforcing our terms and conditions</li>
      </ul>

      <h3 className="text-2xl font-extrabold text-black mb-5">Disclosure of Information</h3>
      <p className="text-base text-black leading-relaxed mb-5">We may disclose your personal information to third parties in the following circumstances:</p>
      <ul className="text-base text-black leading-relaxed mb-10 list-disc pl-5">
        <li>With your consent or as otherwise specified in this Privacy Policy.</li>
        <li>To our trusted service providers who assist us in operating our website and providing our services.</li>
        <li>To comply with legal obligations, enforce our policies, or protect our rights, property, or safety.</li>
        <li>In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
      </ul>

      <h3 className="text-2xl font-extrabold text-black mb-5">Data Security</h3>
      <p className="text-base text-black leading-relaxed mb-10">We prioritize the security of your personal information and have implemented appropriate technical and organizational measures to safeguard it. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

      <h3 className="text-2xl font-extrabold text-black mb-5">Information We Collect</h3>
      <p className="text-base text-black leading-relaxed mb-10">We may collect certain personal information that you voluntarily provide to us, including your name, email address, contact information, and any other information you choose to provide. We may also collect non-personal information automatically when you interact with our website or services, such as your IP address, browser type, and device information.</p>

      <h3 className="text-2xl font-extrabold text-black mb-5">Third-Party Links</h3>
      <p className="text-base text-black leading-relaxed mb-10">Our website may contain links to third-party websites or services that are not operated or controlled by Explorer Backpackers. We are not responsible for the privacy practices or content of such third-party websites. We encourage you to review the privacy policies of those third parties before providing any personal information.</p>

      <h3 className="text-2xl font-extrabold text-black mb-5">Children&apos;s Privacy</h3>
      <p className="text-base text-black leading-relaxed mb-10">Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If we become aware that we have collected personal information from a child under the age of 13 without parental consent, we will take appropriate steps to remove that information from our records.</p>

      <h3 className="text-2xl font-extrabold text-black mb-5">Changes to This Privacy Policy</h3>
      <p className="text-base text-black leading-relaxed mb-10">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this Privacy Policy periodically for any updates.</p>

      <h3 className="text-2xl font-extrabold text-black mb-5">Contact Us</h3>
      <p className="text-base text-black leading-relaxed mb-10">If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at <a href="mailto:bookings@explorerbackpacker.com" className="text-green-600 hover:underline">bookings@explorerbackpacker.com</a> and <a href="tel:+27711370207" className="text-green-600 hover:underline">+27 71 137 0207</a>.</p>

      <h3 className="text-2xl font-extrabold text-black mb-5">Agreement</h3>
      <p className="text-base text-black leading-relaxed mb-10">By continuing to use our website or services after being notified of any changes to this Privacy Policy, you are deemed to have accepted the revised terms. Last Updated: 14/07/2024</p>
    </GenericInfoPage>
  );
}