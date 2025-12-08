"use client";
import React from 'react';
import { Button } from './Button';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  emphasis: string;
  buttonText?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  bgImage: string;
};

export const HeroSection = ({ 
  title, 
  subtitle, 
  emphasis, 
  buttonText, 
  onButtonClick, 
  bgImage 
}: HeroSectionProps) => (
  <section 
    className="relative flex flex-col items-center justify-center text-center text-white p-8 min-h-[60vh] md:min-h-[60vh] bg-cover bg-center bg-fixed mt-0.25" 
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})` }}
  >
    {/* Responsive text sizes added */}
    <h4 className="text-[10px] md:text-[14px] font-bold uppercase tracking-[3px] md:tracking-[5px] text-white">{subtitle}</h4>
    <h1 className="mt-[7.5px] text-3xl md:text-[40px] font-black tracking-[2px] md:tracking-[5px] text-white">{title}</h1>
    <h2 className="mt-[12.5px] text-sm md:text-[18px] font-bold uppercase tracking-[5px] md:tracking-[10px] text-white">{emphasis}</h2>
    {buttonText && (
      <Button onClick={onButtonClick} variant="secondary" className="mt-8 text-xs font-semibold">
        {buttonText}
      </Button>
    )}
  </section>
);