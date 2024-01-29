"use client";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";

// TODO: CSSのデザインを修正

interface NavigationProps {
  session: Session | null;
  navigationLinks: NavigationLink[];
}

const TopNavigation: React.FC<NavigationProps> = ({
  session,
  navigationLinks,
}) => {
  // TODO: sessionを使用するべきか調べる必要あり

  console.log("TopNavigation");

  return (
    <header>
      <div className='flex items-center justify-between px-4 py-2 bg-red-300 shadow-md'>
        <nav className='md:flex hidden space-x-10'>
          {navigationLinks.map((obj) => {
            console.log("map");
            console.log(obj);
            return (
              <Link
                key={obj.key}
                href={obj.link}
                title={obj.linkTitle}
                className='text-gray-600 hover:text-blue-600'
              >
                {obj.linkTitle}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default TopNavigation;
