import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <footer className="justify-center z-0 flex w-full gap-[40px_100px] flex-wrap mt-40 pb-5 px-5 max-md:max-w-full max-md:mt-10">
      <div className="-mt-5">
        <div className="w-full max-w-12 overflow-hidden bg-[#FDFDFD] p-1.5 rounded-[90px]">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-2.5 justify-center p-2.5 rounded-[90px] hover:bg-gray-100 transition-colors"
            aria-label="Toggle light mode"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/0d841300309f13260af532d75a449267b846cb0f?placeholderIfAbsent=true"
              alt="Light mode icon"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
            />
          </button>
          <button
            onClick={toggleTheme}
            className="justify-center items-center flex w-full gap-2.5 h-9 bg-[#F1F1F1] mt-1 px-2.5 rounded-[90px] hover:bg-gray-200 transition-colors"
            aria-label="Toggle dark mode"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/9fa66cd13c8a3dceffc2535e463bde6ddc27c595?placeholderIfAbsent=true"
              alt="Dark mode icon"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
            />
          </button>
        </div>
      </div>
      <nav className="flex min-h-12 items-center gap-4 text-xs font-medium text-center tracking-[-0.12px] leading-none mt-5">
        <div className="text-[#A8A8A8] self-stretch my-auto">
          © 2024, Robot Global FZCO / UI8
        </div>
        <a
          href="#"
          className="text-[#727272] self-stretch my-auto hover:text-gray-900 transition-colors"
        >
          Terms & Licensing
        </a>
      </nav>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2548869794224509ad73d4b053631dfd/b13ab23bcf54167a59093248cc109a01f1ca3bbe?placeholderIfAbsent=true"
        alt="Company logo"
        className="aspect-[1] object-contain w-12 shrink-0 mt-5"
      />
    </footer>
  );
};
