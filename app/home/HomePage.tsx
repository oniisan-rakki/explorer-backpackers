"use client";
import React from 'react';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';
import { HeroSection } from '../components/HeroSection';
import { Button } from '../components/Button';
import { Carousel } from '../components/Carousel';
import { images } from '../data/images';
import { accommodationData } from '../data/accommodation';
import { testimonialsData } from '../data/testimonialsData';
import { promosData } from '../data/promosData';

export const HomePage = () => {
  
  return (
    <>
      <PageTitle title="Home - Johannesburg Backpackers Hostel" />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Explorer Backpackers"
          subtitle="Welcome to"
          emphasis="Your new African Home"
          buttonText="Learn More"
          onButtonClick={() => document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' })}
          bgImage={images.heroWelcome}
        />

        {/* Welcome Section */}
        <section id="welcome" className="py-12 lg:py-24 bg-white">
          <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="pr-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Welcome to your peaceful home away from home</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Experience ultimate comfort, vibrant social activities, and personalized tours. With our friendly 24/7 reception, cozy dorms, and amazing facilities, your stay becomes an unforgettable adventure. Embrace the energy of Johannesburg at Explorer Backpackers and create memories that will last a lifetime.
              </p>
            </div>
            <div>
              <img src={images.welcomeIntro} alt="Welcome to Explorer Backpackers" className="rounded-lg shadow-xl w-full h-[40vh] md:h-[65vh] object-cover" />
            </div>
          </div>
        </section>
        
        {/* Accommodation Section */}
        <section className="py-12 lg:py-24 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8 md:mb-12">Accommodation</h2>
          <div className="container mx-auto px-5">
            <Carousel 
              items={accommodationData} 
              renderItem={(room) => (
                <div className="p-2 md:p-3 h-full">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <img src={room.img} alt={room.title} className="w-full h-48 md:h-60 object-cover" />
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <span className="text-xs md:text-sm text-gray-500 mb-1">{room.details}</span>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{room.title}</h3>
                      <p className="text-green-600 text-sm font-medium mb-4">{room.price}</p>
                      
                      {/* Replaced navigateTo with Link */}
                      <Link href="/book" className="mt-auto w-full">
                        <Button className="w-full text-xs">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* Tours Section */}
        <section 
          className="py-16 lg:py-32 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${images.tours})` }}
        >
          <div className="container mx-auto px-5">
            <div className="max-w-2xl bg-black/90 p-8 md:p-15 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Unique Experiences</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-4">
                From a complex history, an African cosmopolitan hub has emerged. A youthful city obsessed with the new, constantly surprising both locals and visitors alike.
              </p>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-8">
                Joburg's allure lies in its juxtapositions and transitions seamlessly between polished elegance and raw edginess. Uncover Johannesburg's vibrant and rich history on our guided tours, exploring iconic landmarks and hidden gems. Tap into the city and book a tour with us.
              </p>
              
              {/* Replaced navigateTo with Link */}
              <Link href="/experiences">
                <Button variant="secondary" className="text-sm">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Promos Section */}
        <section className="py-12 lg:py-24 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8 md:mb-12">Promos and Offers</h2>
          <div className="container mx-auto px-5">
            <Carousel 
              items={promosData}
              renderItem={(promo) => (
                <div className="p-2 md:p-3 h-full">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <img src={promo.img} alt={promo.title} className="w-full h-48 md:h-56 object-cover" />
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-black mb-2">{promo.title}</h3>
                      <p className="text-black mb-4 flex-grow text-xs md:text-sm">{promo.description}</p>
                      
                      {/* Replaced navigateTo with dynamic Link */}
                      <Link 
                        href={promo.page === 'home' ? '/' : `/${promo.page}`} 
                        className="mt-auto w-full"
                      >
                        <Button className="w-full text-xs">
                          {promo.page === 'book' ? 'Book Now' : 'Learn More'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 lg:py-24 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8 md:mb-12">Reviews</h2>
          <div className="container mx-auto px-5">
            <Carousel 
              items={testimonialsData}
              renderItem={(testimonial) => (
                <div className="p-2 md:p-3 h-full">
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full flex flex-col text-center">
                    <img src={images.quote} alt="Quote" className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4" />
                    <p className="text-black italic mb-6 flex-grow text-sm">"{testimonial.quote}"</p>
                    <h4 className="font-semibold text-black text-sm md:text-base">{testimonial.author}</h4>
                  </div>
                </div>
              )}
            />
          </div>
        </section>
      </main>
    </>
  );
};