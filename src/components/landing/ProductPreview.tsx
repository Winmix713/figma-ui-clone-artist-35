import React from 'react';

export const ProductPreview: React.FC = () => {
  return (
    <section className="border-[color:var(--Stroke-Subtle,rgba(168,168,168,0.10))] relative w-full mt-12 p-2 rounded-[40px] border-[1.5px] border-solid max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/ebf7dfe9b198c9d04ea69e5a4c1f03a025d3a5bd?placeholderIfAbsent=true"
        alt="Product preview"
        className="aspect-[1.82] object-contain w-full z-0"
      />
      <div className="absolute z-0 flex min-h-[544px] w-[1440px] -translate-x-2/4 -translate-y-2/4 h-[544px] border-y-[1.5px] border-y-[rgba(168,168,168,0.00)] border-solid left-2/4 top-2/4 max-md:max-w-full" />
    </section>
  );
};
