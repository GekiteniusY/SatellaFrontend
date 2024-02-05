"use client";
import PaginationDot from "../../../components/elements/pagination-dot/pagination-dot";

export default function ComponentTest() {
  console.log("ComponentTest");
  return (
    <>
      <div>Here is ComponentTest page</div>
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
    </>
  );
}
