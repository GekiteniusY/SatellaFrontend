"use client";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";
import TopNavigationLayout from "./layout/top-navigation-layout";
import ModalSignIn from "../modal/modal-signin";
import ModalSignUp from "../modal/modal-signup";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

// TODO: CSSのデザインを修正

const LinkHome: NavigationLink = {
  key: "Home",
  linkTitle: "HOME",
  link: "/",
};

const SignUp: NavigationLink = {
  key: "SignUp",
  linkTitle: "SignUp",
  link: "/SignUp",
};

const LinkSearch: NavigationLink = {
  key: "Search",
  linkTitle: "Search",
  link: "/",
};

const LinkBookmark: NavigationLink = {
  key: "Bookmark",
  linkTitle: "Bookmark",
  link: "/",
};

const LinkReservation: NavigationLink = {
  key: "Reservation",
  linkTitle: "Reservation",
  link: "/",
};

const NavigationLinksBeforeLogin: NavigationLink[] = [LinkHome, SignUp];
const NavigationLinks: NavigationLink[] = [
  LinkHome,
  LinkSearch,
  LinkBookmark,
  LinkReservation,
];

interface NavigationProps {
  session: Session | null;
}

const pcMenue = (
  session: Session | null,
  navigationLinks: NavigationLink[]
) => {
  return (
    <>
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
      {session ? (
        // サインイン中は特段の表示なし
        <></>
      ) : (
        // サインイン前にはSignInとSignUpのモーダルへのリンクを表示
        <>
          <ModalSignIn></ModalSignIn>
          <ModalSignUp></ModalSignUp>
        </>
      )}
    </>
  );
};

// TODO: スマホ向けのレイアウトを調整する
const spMenue = (
  session: Session | null,
  navigationLinks: NavigationLink[]
) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='md:hidden'
      >
        this is humburger menu
      </button>
      {isMenuOpen ? "Close" : "Open"}
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
      {session ? (
        // サインイン中は特段の表示なし
        <></>
      ) : (
        // サインイン前にはSignInとSignUpのモーダルへのリンクを表示
        // TODO: スマホ向けのモーダルのレイアウトを調整する
        <>
          <ModalSignIn></ModalSignIn>
          <ModalSignUp></ModalSignUp>
        </>
      )}
    </>
  );
};

// 全てのページの上部に表示されるナビゲーション
// sessionが無い場合：Homeへのリンク、SignUpおよびSignInのモーダル表示切替のテキスト
const TopNavigation: React.FC<NavigationProps> = ({ session }) => {
  console.log("TopNavigation");

  // TODO: middleware実装時にリダイレクト処理をどこで行うか検討すること（二重になりそう？）
  // sessionが無い場合のリダイレクト処理
  const pathname = usePathname();
  const router = useRouter();

  if (session === null && !pathname?.includes("/Home")) {
    router.push("/");
  }

  const navigationLinks: NavigationLink[] = session
    ? NavigationLinks
    : NavigationLinksBeforeLogin;

  return (
    <>
      {/* 各ページへのリンク */}
      <TopNavigationLayout>
        <>
          {/* スマホ向け、PC向けの判定はコンポーネント内のTailwindCSSで実装中 */}
          {/* TODO: TailwindCSS以外での実装やベタープラクティスがあるかどうか調べる */}
          {spMenue(session, navigationLinks)}
          {pcMenue(session, navigationLinks)}
        </>
      </TopNavigationLayout>
    </>
  );
};

export default TopNavigation;
