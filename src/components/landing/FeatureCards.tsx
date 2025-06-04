
import React from 'react';

export const FeatureCards: React.FC = () => {
  return (
    <div className="flex w-full items-center gap-figma-sm flex-wrap mt-figma-sm max-md:max-w-full">
      <article className="justify-center items-stretch self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] bg-E2E2E2-50 my-auto pl-figma-3xl pr-0.5 py-figma-3xl rounded-figma-lg max-md:max-w-full max-md:pl-5">
        <div className="flex min-h-figma-card max-w-full w-figma-2xl" />
        <div className="w-full m-figma-3xl max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/4683db6ca92c6b0dafaa12eeff42a938c41039c0?placeholderIfAbsent=true"
            alt="Brief management icon"
            className="aspect-[1] object-contain w-figma-sm"
          />
          <div className="w-full mt-figma-lg">
            <h3 className="text-1B1B1B text-figma-lg font-medium leading-none">
              Brieft management
            </h3>
            <p className="text-727272 text-figma-md font-normal leading-[22px] mt-3">
              Effortlessly view, edit, and update project details as
              they evolve.
            </p>
          </div>
        </div>
      </article>
      <article className="justify-center items-stretch self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] bg-E2E2E2-50 my-auto pl-figma-3xl py-figma-3xl rounded-figma-lg max-md:max-w-full">
        <div className="flex max-w-full w-[424px] flex-col items-stretch justify-center py-px">
          <div className="overflow-hidden bg-F1F1F1 rounded-[16px_0px_0px_16px] max-md:max-w-full">
            <div className="bg-[rgba(40,40,40,0.15)] px-[42px] py-[31px] max-md:max-w-full max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/af492d7354a8a446346005522af7505d8866132d?placeholderIfAbsent=true"
                alt="Quick share preview"
                className="aspect-[1.88] object-contain w-full shadow-figma-product"
              />
              <div className="flex w-figma-lg shrink-0 h-1.5 bg-727272 rounded-sm" />
            </div>
          </div>
        </div>
        <div className="w-full m-figma-3xl max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/5d99d366903055d5b8fadad002a9cbaacf4ef58e?placeholderIfAbsent=true"
            alt="Quick share icon"
            className="aspect-[1] object-contain w-figma-sm"
          />
          <div className="w-full mt-figma-lg">
            <h3 className="text-1B1B1B text-figma-lg font-medium leading-none">
              Quick share
            </h3>
            <p className="text-727272 text-figma-md font-normal leading-[22px] mt-3">
              Instantly generate shareable links for yourproject
              briefs.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
