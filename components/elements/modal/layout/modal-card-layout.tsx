import React from "react";

const ModalCardLayout = (children: React.ReactNode) => {
  return (
    // Modalの外枠
    <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black-rgba'>
      {children}
    </div>
  );
};

export default ModalCardLayout;
