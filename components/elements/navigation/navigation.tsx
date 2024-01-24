"use client";
import { css } from "@emotion/react";
import { Session } from "@supabase/supabase-js";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";

// TODO: CSSのデザインを修正

const NavigationCss = css({
  display: "flex",
  alignItems: "center", // items-center
  justifyContent: "space-between", // justify-between
  paddingX: "4", // px-4
  paddingY: "2", // py-2
  backgroundColor: "#ffffff", // bg-white
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
});

const NavigationHiddenSetting = css({
  display: "none",
  "@media (min-width: 768px)": {
    display: "flex",
  },
  spaceX: "4",
});

interface NavigationProps {
  session: Session | null;
  navigationLinks: NavigationLink[];
}

const TopNavigation: React.FC<NavigationProps> = ({
  session,
  navigationLinks,
}) => {
  const router = useRouter();

  // TODO: セッションがない場合にサインイン画面へ遷移させるようにする
  if (session === null) {
    router.push("/");
  }

  return (
    <Head>
      <div css={NavigationCss}>
        <nav css={NavigationHiddenSetting}>
          {navigationLinks.map((obj) => {
            return (
              <Link
                key={obj.key}
                href={obj.link}
                title={obj.linkTitle}
              />
            );
          })}
        </nav>
      </div>
    </Head>
  );
};

export default TopNavigation;
