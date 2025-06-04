
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="z-figma-0 flex w-full items-center gap-[40px_100px] justify-between flex-wrap p-figma-md max-md:max-w-full">
      <div className="self-stretch flex items-center gap-1 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/333372e8c16eb54147e9099e32f0ec689e117db1?placeholderIfAbsent=true"
          alt="Logo icon"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/262051f356917f4d35da4def49a44cd8b00a6d8d?placeholderIfAbsent=true"
          alt="Brand name"
          className="aspect-[3.95] object-contain w-figma-md self-stretch shrink-0 my-auto"
        />
      </div>
      <button className="justify-center items-center self-stretch flex min-h-12 gap-figma-sm overflow-hidden text-figma-base text-727272 font-medium tracking-figma-md leading-none bg-FDFDFD my-auto px-2 py-1.5 rounded-figma-pill hover-bg-F1F1F1 transition-figma">
        <div className="text-727272 self-stretch gap-figma-sm my-auto px-figma-md py-2">
          Sign in
        </div>
      </button>
    </header>
  );
};
