import React from "react";

interface ModalCardLayoutProps {
  children: React.ReactNode;
}

const ModalCardLayout: React.FC<ModalCardLayoutProps> = ({ children }) => {
  return (
    // Modalの外枠
    <>
      <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black-rgba'>
        <div className='m-auto relative p-4 w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default ModalCardLayout;
