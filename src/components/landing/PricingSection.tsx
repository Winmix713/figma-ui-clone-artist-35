import React from 'react';

export const PricingSection: React.FC = () => {
  return (
    <section className="self-center z-0 flex w-[768px] max-w-full flex-col items-stretch mt-40 max-md:mt-10">
      <h2 className="text-[#1B1B1B] text-center text-[44px] font-semibold leading-[48px] tracking-[-0.66px] self-center w-[520px] max-md:max-w-full">
        Start for free and upgrade to unlock more features
      </h2>
      <div className="flex w-full flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
        <article className="flex min-w-60 items-center gap-2 overflow-hidden flex-1 shrink basis-[0%] p-2 rounded-[40px]">
          <div className="self-stretch min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] my-auto pt-[60px] pb-2 px-2 rounded-[32px]">
            <h3 className="text-[#1B1B1B] self-stretch flex-1 shrink basis-[0%] w-full gap-2 text-[32px] font-semibold whitespace-nowrap leading-none px-10 max-md:px-5">
              Free
            </h3>
            <div className="w-full overflow-hidden text-base text-[#1B1B1B] font-normal leading-none mt-8 px-10 max-md:px-5">
              <div className="flex w-full items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/8bd27475852c1f2b15db5cdd04d234c0d57f3170?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  AI-generated project briefs
                </div>
              </div>
              <div className="flex w-full items-center gap-4 mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/8bd27475852c1f2b15db5cdd04d234c0d57f3170?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  Basic editing
                </div>
              </div>
              <div className="flex w-full items-center gap-4 mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/8bd27475852c1f2b15db5cdd04d234c0d57f3170?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  Shareable links
                </div>
              </div>
              <div className="flex w-full items-center gap-4 text-[#A444F3] mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/2f7a40c7a9cbdd7db44767fccd985b0526f0b066?placeholderIfAbsent=true"
                  alt="Star icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#A444F3] self-stretch my-auto">
                  5 generation credits/month
                </div>
              </div>
              <div className="text-[#1B1B1B] self-stretch w-full gap-4 mt-3">
                PDF export
              </div>
              <div className="text-[#1B1B1B] self-stretch w-full gap-4 mt-3">
                Email sharing
              </div>
            </div>
            <div className="items-stretch border-[color:var(--Stroke-Subtle,rgba(168,168,168,0.10))] flex w-full flex-col overflow-hidden mt-8 px-10 py-6 rounded-3xl border-[1.5px] border-solid max-md:px-5">
              <div className="flex w-full items-center gap-3">
                <div className="text-[#1B1B1B] text-[40px] font-semibold leading-[1.1] tracking-[-0.4px] self-stretch my-auto">
                  $0
                </div>
                <div className="text-[#727272] text-lg font-medium leading-none opacity-80 self-stretch my-auto">
                  / month
                </div>
              </div>
              <button className="justify-center items-center flex min-h-12 gap-2 overflow-hidden text-sm text-[#727272] font-medium tracking-[-0.14px] leading-none bg-[#FDFDFD] mt-4 px-2 py-1.5 rounded-[90px] hover:bg-gray-50 transition-colors">
                <div className="text-[#727272] self-stretch gap-4 my-auto px-5 py-2">
                  Create an account
                </div>
              </button>
            </div>
          </div>
        </article>
        <article className="items-center flex min-w-60 gap-2 overflow-hidden flex-1 shrink basis-[0%] p-2 rounded-[40px] border-[1.5px] border-solid border-[rgba(226,226,226,0.50)]">
          <div className="self-stretch relative min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] bg-[#FDFDFD] my-auto pt-[60px] pb-2 px-2 rounded-[32px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/0cfb721792fe1e5eb5072fc233b4923d4e2ac7c1?placeholderIfAbsent=true"
              alt="Premium background"
              className="aspect-[2.38] object-contain w-[691px] absolute z-0 max-w-full -translate-x-2/4 -translate-y-2/4 h-[691px] left-2/4 top-2/4"
            />
            <h3 className="text-[#1B1B1B] self-stretch flex-1 shrink basis-[0%] z-0 w-full gap-2 text-[32px] font-semibold whitespace-nowrap leading-none px-10 max-md:px-5">
              Premium
            </h3>
            <div className="z-0 w-full overflow-hidden text-base text-[#1B1B1B] font-normal leading-none mt-8 px-10 max-md:px-5">
              <div className="flex w-full items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/44547687514215335f0aa0781c4c21307c18cc48?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  Including all free features
                </div>
              </div>
              <div className="flex w-full items-center gap-4 mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/44547687514215335f0aa0781c4c21307c18cc48?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  No watermarks on shared links
                </div>
              </div>
              <div className="flex w-full items-center gap-4 mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/44547687514215335f0aa0781c4c21307c18cc48?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  Section regeneration
                </div>
              </div>
              <div className="flex w-full items-center gap-4 mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/44547687514215335f0aa0781c4c21307c18cc48?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  PDF export
                </div>
              </div>
              <div className="flex w-full items-center gap-4 mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/44547687514215335f0aa0781c4c21307c18cc48?placeholderIfAbsent=true"
                  alt="Check icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#1B1B1B] self-stretch my-auto">
                  Email sharing
                </div>
              </div>
              <div className="flex w-full items-center gap-4 text-[#A444F3] mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/2f7a40c7a9cbdd7db44767fccd985b0526f0b066?placeholderIfAbsent=true"
                  alt="Star icon"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
                <div className="text-[#A444F3] self-stretch my-auto">
                  25 generation credits/month
                </div>
              </div>
            </div>
            <div className="items-stretch border-[color:var(--Stroke-Stroke2,#E2E2E2)] shadow-[0px_2.15px_0.5px_-2px_rgba(0,0,0,0.25),0px_24px_24px_-16px_rgba(8,8,8,0.04),0px_6px_13px_0px_rgba(8,8,8,0.03),0px_6px_4px_-4px_rgba(8,8,8,0.05),0px_5px_1.5px_-4px_rgba(8,8,8,0.09)] backdrop-blur-[32px] z-0 flex w-full flex-col overflow-hidden bg-[#FDFDFD] mt-8 px-10 py-6 rounded-3xl border-[1.5px] border-solid max-md:px-5">
              <div className="flex w-full items-center gap-3">
                <div className="text-[#1B1B1B] text-[40px] font-semibold leading-[1.1] tracking-[-0.4px] self-stretch my-auto">
                  $3
                </div>
                <div className="text-[#727272] text-lg font-medium leading-none opacity-80 self-stretch my-auto">
                  / month
                </div>
              </div>
              <button className="text-[#FDFDFD] gap-2 overflow-hidden text-sm font-medium tracking-[-0.14px] leading-none bg-[#282828] mt-4 px-7 py-3.5 rounded-[90px] max-md:px-5 hover:bg-gray-800 transition-colors">
                Get started now
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
