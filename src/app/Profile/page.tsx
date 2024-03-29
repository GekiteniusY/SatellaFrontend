import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";

// import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return <p>Hello {data.user.email}</p>;
}
