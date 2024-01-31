import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import TopNavigation from "../../components/elements/navigation/navigation";

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

// SupabaseのSessionを渡すためのラッパー
const NavigationSupabaseListener: React.FC = async ({}) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("supabase listener");
  console.log("session: ", session);

  return <TopNavigation session={session} />;
};

export default NavigationSupabaseListener;
