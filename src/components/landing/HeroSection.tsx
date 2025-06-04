import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="self-center z-0 flex w-[976px] max-w-full flex-col items-center mt-20 max-md:mt-10">
      <div className="flex w-[765px] max-w-full flex-col items-stretch">
        <div className="flex w-full flex-col items-center text-center max-md:max-w-full">
          <h1 className="text-[#1B1B1B] text-6xl font-semibold leading-[60px] tracking-[-0.9px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
            AI-powered project briefs for designers
          </h1>
          <p className="text-[#727272] text-lg font-normal leading-6 mt-5 max-md:max-w-full">
            Transform your ideas into comprehensive project briefs in
            seconds! Let AI create your project brief while you focus on
            bringing your vision to life.
          </p>
        </div>
        <button className="text-[#FDFDFD] self-center gap-2 overflow-hidden text-sm font-medium tracking-[-0.14px] leading-none bg-[#282828] mt-12 px-7 py-3.5 rounded-[90px] max-md:mt-10 max-md:px-5 hover:bg-gray-800 transition-colors">
          Get started for free
        </button>
      </div>
    </section>
  );
};
