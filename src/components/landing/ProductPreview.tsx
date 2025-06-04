
import React from 'react';

export const ProductPreview: React.FC = () => {
  return (
    <section className="border-figma-subtle relative w-full m-figma-3xl p-figma-sm rounded-figma-xl border-[1.5px] border-solid max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/ebf7dfe9b198c9d04ea69e5a4c1f03a025d3a5bd?placeholderIfAbsent=true"
        alt="Product preview"
        className="aspect-figma-card object-contain w-full z-figma-0 shadow-figma-product"
      />
      <div className="absolute z-figma-0 flex min-h-[544px] w-[1440px] transform-figma-center h-[544px] border-y-[1.5px] border-y-transparent border-solid left-2/4 top-2/4 max-md:max-w-full" />
    </section>
  );
};
