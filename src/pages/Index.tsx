
import React from 'react';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProductPreview } from '@/components/landing/ProductPreview';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { FeatureCards } from '@/components/landing/FeatureCards';
import { PricingSection } from '@/components/landing/PricingSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

const Index: React.FC = () => {
  return (
    <div className="items-stretch relative flex w-full flex-col overflow-hidden bg-F1F1F1 max-md:max-w-full">
      <div className="relative z-figma-0 flex w-full flex-col items-stretch max-md:max-w-full">
        <Header />
        
        <main>
          <HeroSection />
          <ProductPreview />
          <TestimonialsSection />
          
          <div className="absolute z-figma-0 flex min-h-[236px] w-full translate-x-[0%] -translate-y-2/4 h-[236px] border-y-[1.5px] border-y-transparent top-2/4 inset-x-0 max-md:max-w-full" />
          <div className="absolute z-figma-0 flex min-h-[1156px] w-figma-7xl max-w-full -translate-x-2/4 translate-y-[0%] h-[1156px] border-x-[1.5px] border-x-transparent left-2/4 bottom-0" />
        </main>
        
        <FeaturesSection />
        <FeatureCards />
        
        <PricingSection />
        
        <div className="absolute z-figma-0 flex min-h-[904px] w-figma-7xl max-w-full h-[904px] border-x-[1.5px] border-x-transparent right-[232px] bottom-[163px]" />
        <div className="absolute z-figma-0 flex min-h-figma-cta w-[1440px] transform-figma-center h-figma-cta border-y-[1.5px] border-y-transparent left-2/4 bottom-[282px] max-md:max-w-full" />
        
        <CTASection />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
