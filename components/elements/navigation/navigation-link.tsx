import Link from "next/link";
import React from "react";

interface NavigationLinkProps {
  linkTitle: string;
  link: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ linkTitle, link }) => {
  return <Link href={link}>{linkTitle}</Link>;
};

export default NavigationLink;
