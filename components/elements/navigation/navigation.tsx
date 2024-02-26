"use client";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";
import TopNavigationLayout from "./layout/top-navigation-layout";
import ModalSignIn from "../modal/modal-signin";
import ModalSignUp from "../modal/modal-signup";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import IconUserProfile from "../../icons/user-profile";

// TODO: CSSのデザインを修正
// TODO: Userのプロフィールページへリンクするアイコン部分の作成

const LinkHome: NavigationLink = {
  key: "Home",
  linkTitle: "HOME",
  link: "/Home",
};

const LinkSearch: NavigationLink = {
  key: "Search",
  linkTitle: "Search",
  link: "/Search",
};

const LinkBookmark: NavigationLink = {
  key: "Bookmark",
  linkTitle: "Bookmark",
  link: "/Bookmark",
};

const LinkReservation: NavigationLink = {
  key: "Reservation",
  linkTitle: "Reservation",
  link: "/Reservation",
};

const NavigationLinksBeforeLogin: NavigationLink[] = [LinkHome];
const NavigationLinks: NavigationLink[] = [
  LinkHome,
  LinkSearch,
  LinkBookmark,
  LinkReservation,
];

interface NavigationProps {
  session: Session | null;
}

// 全てのページの上部に表示されるナビゲーション
// sessionが無い場合：Homeへのリンク、SignUpおよびSignInのモーダル表示切替のテキスト
const TopNavigation: React.FC<NavigationProps> = ({ session }) => {
  console.log("TopNavigation");

  // TODO: middleware実装時にリダイレクト処理をどこで行うか検討すること（二重になりそう？）
  // sessionが無い場合のリダイレクト処理
  // const pathname = usePathname();
  // const router = useRouter();

  // if (session === null && !pathname?.includes("/Home")) {
  //   router.push("/");
  // }

  // SignInモーダルの開閉制御用
  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
  const openModalSignIn = () => {
    setIsModalSignInOpen(true);
  };
  const closeModalSingIn = () => {
    setIsModalSignInOpen(false);
  };

  // SignUpモーダルの開閉制御用
  const [isModalSignUpOpen, setIsModalSignUp] = useState(false);
  const openModalSignUp = () => {
    setIsModalSignUp(true);
  };
  const closeModalSignUp = () => {
    setIsModalSignUp(false);
  };

  // セッション状態によるリンクの出し分け
  const navigationLinks: NavigationLink[] = session
    ? NavigationLinks
    : NavigationLinksBeforeLogin;

  return (
    <>
      {/* 各ページへのリンク */}
      <TopNavigationLayout>
        <>
          {/* スマホ向け、PC向けの判定はコンポーネント内のTailwindCSSで実装中 */}
          {/* ∵モーダルの開閉状態の制御ロジックが分散するのを防ぐため */}
          <nav className='md:flex hidden space-x-10'>
            {navigationLinks.map((obj) => {
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
              <>
                <IconUserProfile />
              </>
            ) : (
              // サインイン前にはSignInとSignUpのモーダルへのリンクを表示
              <>
                <button onClick={openModalSignIn}>SignIn</button>
                <button onClick={openModalSignUp}>SignUp</button>
                {isModalSignInOpen ? (
                  <ModalSignIn closeModalSignIn={closeModalSingIn} />
                ) : null}
                {isModalSignUpOpen ? (
                  <ModalSignUp closeModalSignUp={closeModalSignUp} />
                ) : null}
              </>
            )}
          </nav>
        </>
      </TopNavigationLayout>
    </>
  );
};

export default TopNavigation;
