"use client";
import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";

interface NavigationLinkProps {
  linkTitle: string;
  link: string;
}

const NavigationLinkCss = css({
  color: "#718096", // text-gray-600
  "&:hover": {
    color: "#4a90e2", // text-blue-600
  },
});

const NavigationLink: React.FC<NavigationLinkProps> = ({ linkTitle, link }) => {
  return (
    <Link
      href={link}
      css={NavigationLinkCss}
    >
      {linkTitle}
    </Link>
  );
};

export default NavigationLink;
