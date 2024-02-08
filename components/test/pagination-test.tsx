"use client";
import React from "react";
import PaginationDot from "../elements/pagination-dot/pagination-dot";

const PaginationTest = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-5'>
        <PaginationDot
          isActiveColor={true}
          onClickFunction={() => {}}
        />
        <PaginationDot
          isActiveColor={false}
          onClickFunction={() => {}}
        />
        <PaginationDot
          isActiveColor={false}
          onClickFunction={() => {}}
        />
        <PaginationDot
          isActiveColor={false}
          onClickFunction={() => {}}
        />
      </div>
    </div>
  );
};

export default PaginationTest;
