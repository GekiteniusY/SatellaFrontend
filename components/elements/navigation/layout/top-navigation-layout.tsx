import React from "react";

// layoutはchildren必須
// children: Navigationに表示するコンポーネント
interface TopNavigationProps {
  children: React.ReactNode;
}

const TopNavigationLayout: React.FC<TopNavigationProps> = ({ children }) => {
  return (
    <header>
      <div className='flex items-center justify-between px-4 py-2 bg-gray-300 shadow-md'>
        <nav className='md:flex hidden space-x-10'>{children}</nav>
      </div>
    </header>
  );
};

export default TopNavigationLayout;
