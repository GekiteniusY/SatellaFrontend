import React from "react";

// layoutはchildren必須
// children: Navigationに表示するコンポーネント
interface TopNavigationProps {
  children: React.ReactNode;
}

const TopNavigationLayout: React.FC<TopNavigationProps> = ({ children }) => {
  return (
    <header>
      <div className='flex items-center px-4 py-2 bg-gray-300 shadow-md'>
        <nav className='md:flex hidden space-x-10 bg-blue-300'>
          <div className='justify-between bg-red-300'>{children}</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
            />
          </svg>
        </nav>
      </div>
    </header>
  );
};

export default TopNavigationLayout;
