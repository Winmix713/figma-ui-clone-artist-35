import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="flex w-[175px] max-w-full flex-col items-stretch mt-12 max-md:mt-10">
      <div className="text-[#727272] text-center text-sm font-normal leading-none">
        Join 80,000+ designers
      </div>
      <div className="self-center flex w-full max-w-[175px] items-center gap-2 overflow-hidden justify-center mt-3 rounded-[32px]">
        <div className="self-stretch flex w-[175px] items-center gap-[-11px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/c9fdcb16514499dbcb594799538d74fcebefd7e1?placeholderIfAbsent=true"
            alt="Designer avatars"
            className="aspect-[5.46] object-contain w-[175px] self-stretch gap-[-11px] my-auto"
          />
        </div>
      </div>
    </section>
  );
};
