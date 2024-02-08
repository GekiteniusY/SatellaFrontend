import { useRouter } from "next/router";
import PaginationTest from "../../../components/test/pagination-test";
import { useEffect, useState } from "react";

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function ComponentTest() {
  console.log("ComponentTest");

  return (
    <>
      <div>Here is ComponentTest page</div>
      <PaginationTest />
    </>
  );
}
