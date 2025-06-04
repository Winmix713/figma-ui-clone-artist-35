
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="self-center z-figma-0 flex w-figma-7xl max-w-full flex-col items-center m-figma-4xl max-md:mt-10">
      <div className="flex w-figma-5xl max-w-full flex-col items-stretch">
        <div className="flex w-full flex-col items-center text-center max-md:max-w-full">
          <h1 className="text-1B1B1B text-figma-6xl font-semibold leading-[60px] tracking-figma-2xl max-md:max-w-full max-md:text-figma-3xl max-md:leading-[44px]">
            AI-powered project briefs for designers
          </h1>
          <p className="text-727272 text-figma-lg font-normal leading-6 mt-figma-md max-md:max-w-full">
            Transform your ideas into comprehensive project briefs in
            seconds! Let AI create your project brief while you focus on
            bringing your vision to life.
          </p>
        </div>
        <button className="text-FDFDFD self-center gap-figma-sm overflow-hidden text-figma-base font-medium tracking-figma-md leading-none bg-282828 m-figma-3xl px-7 py-3.5 rounded-figma-pill max-md:mt-10 max-md:px-5 hover-bg-282828 transition-figma">
          Get started for free
        </button>
      </div>
    </section>
  );
};
