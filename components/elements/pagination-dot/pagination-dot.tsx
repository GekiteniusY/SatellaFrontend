import React from "react";

interface PaginationDotProps {
  isActiveColor: boolean;
  onClickFunction?: () => void | null;
}

const PaginationDot: React.FC<PaginationDotProps> = ({
  isActiveColor,
  onClickFunction,
}) => {
  const func = onClickFunction ? onClickFunction : () => {};

  const paginationDot = isActiveColor ? (
    <button
      onClick={func}
      className='w-2 h-2 focus:outline-none mx-1.5 bg-blue-500 rounded-full '
    ></button>
  ) : (
    <button
      onClick={func}
      className='w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full '
    ></button>
  );

  return paginationDot;
};

export default PaginationDot;
