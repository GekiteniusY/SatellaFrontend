import { Session } from "@supabase/supabase-js";
import Head from "next/head";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  // TODO: セッションがない場合にサインイン画面へ遷移させるようにする
  if (session === null) {
    router.push("/");
  }

  return (
    <Head>
      <div>
        <nav>
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
