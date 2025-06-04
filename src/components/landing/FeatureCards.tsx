import React from 'react';

export const FeatureCards: React.FC = () => {
  return (
    <div className="flex w-full items-center gap-4 flex-wrap mt-4 max-md:max-w-full">
      <article className="justify-center items-stretch self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] bg-[rgba(226,226,226,0.50)] my-auto pl-12 pr-0.5 py-12 rounded-[32px] max-md:max-w-full max-md:pl-5">
        <div className="flex min-h-[244px] max-w-full w-[422px]" />
        <div className="w-full mt-12 max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/4683db6ca92c6b0dafaa12eeff42a938c41039c0?placeholderIfAbsent=true"
            alt="Brief management icon"
            className="aspect-[1] object-contain w-6"
          />
          <div className="w-full mt-6">
            <h3 className="text-[#1B1B1B] text-lg font-medium leading-none">
              Brieft management
            </h3>
            <p className="text-[#727272] text-base font-normal leading-[22px] mt-3">
              Effortlessly view, edit, and update project details as
              they evolve.
            </p>
          </div>
        </div>
      </article>
      <article className="justify-center items-stretch self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] bg-[rgba(226,226,226,0.50)] my-auto pl-12 py-12 rounded-[32px] max-md:max-w-full">
        <div className="flex max-w-full w-[424px] flex-col items-stretch justify-center py-px">
          <div className="overflow-hidden bg-[#F1F1F1] rounded-[16px_0px_0px_16px] max-md:max-w-full">
            <div className="bg-[rgba(40,40,40,0.15)] px-[42px] py-[31px] max-md:max-w-full max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/af492d7354a8a446346005522af7505d8866132d?placeholderIfAbsent=true"
                alt="Quick share preview"
                className="aspect-[1.88] object-contain w-full shadow-[0px_24px_32px_-8px_rgba(18,18,18,0.05)]"
              />
              <div className="flex w-[195px] shrink-0 h-1.5 bg-[#727272] rounded-sm" />
            </div>
          </div>
        </div>
        <div className="w-full mt-12 max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/5d99d366903055d5b8fadad002a9cbaacf4ef58e?placeholderIfAbsent=true"
            alt="Quick share icon"
            className="aspect-[1] object-contain w-6"
          />
          <div className="w-full mt-6">
            <h3 className="text-[#1B1B1B] text-lg font-medium leading-none">
              Quick share
            </h3>
            <p className="text-[#727272] text-base font-normal leading-[22px] mt-3">
              Instantly generate shareable links for yourproject
              briefs.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
