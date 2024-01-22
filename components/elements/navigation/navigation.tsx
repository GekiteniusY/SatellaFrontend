"use client";
import { css } from "@emotion/react";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

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
  children: ReactNode;
}

const TopNavigation: React.FC<NavigationProps> = ({ children, session }) => {
  const router = useRouter();

  // TODO: セッションがない場合にサインイン画面へ遷移させるようにする
  if (session === null) {
    router.push("/");
  }

  return (
    <head>
      <div css={NavigationCss}>
        <nav css={NavigationHiddenSetting}>{children}</nav>
      </div>
    </head>
  );
};

export default TopNavigation;
