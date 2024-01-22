import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import NavigationLink from "../../components/elements/navigation/navigation-link";
import { cookies } from "next/headers";
import TopNavigation from "../../components/elements/navigation/navigation";

interface SupabaseListenerProps {}

const LinkHome = (
  <NavigationLink
    linkTitle={"HOME"}
    link={"/"}
  />
);
const LinkSearch = (
  <NavigationLink
    linkTitle={"Search"}
    link={"/"}
  />
);
const LinkBookmark = (
  <NavigationLink
    linkTitle={"Bookmark"}
    link={""}
  />
);
const LinkReservation = (
  <NavigationLink
    linkTitle={"Reservation"}
    link={"/"}
  />
);

const NavigationLinksBeforeLogin = [LinkHome];
const NavigationLinks = [LinkHome, LinkSearch, LinkBookmark, LinkReservation];

// SupabaseのSessionを渡すためのラッパー
const SupabaseListener: React.FC<SupabaseListenerProps> = async ({}) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <TopNavigation
      session={session}
      children={
        session
          ? NavigationLinks.map((obj) => obj)
          : NavigationLinksBeforeLogin.map((obj) => obj)
      }
    />
  );
};

export default SupabaseListener;
