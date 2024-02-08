import React from "react";

interface NormalFillButtonProps {
  children: React.ReactNode;
}

const NormalFillButton: React.FC<NormalFillButtonProps> = ({ children }) => {
  return (
    <div className='flex justify-center py-2 px-4 text-white font-bold bg-indigo-600 rounded-lg hover:bg-blue-700'>
      {children}
    </div>
  );
};

export default NormalFillButton;
