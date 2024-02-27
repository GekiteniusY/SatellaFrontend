import { BIZ_UDGothic } from "next/font/google";

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts
// https://fonts.google.com/

export const biz_udGothic400 = BIZ_UDGothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-biz-udgothic400",
  display: "swap",
});

export const biz_udGothic700 = BIZ_UDGothic({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-biz-udgothic700",
  display: "swap",
});
