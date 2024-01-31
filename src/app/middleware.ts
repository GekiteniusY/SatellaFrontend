import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
// import type { Database } from "@/lib/database.types";

// TODO: middleware実装時にリダイレクト処理をどこで行うか検討すること（二重になりそう？）
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  // TODO: DBの型定義の初期化ができたら修正
  const supabase = createMiddlewareClient({ req, res });
  // const supabase = createMiddlewareClient<Database>({ req, res });

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession();

  console.log(res);

  return res;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
