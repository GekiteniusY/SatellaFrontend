import { biz_udGothic700 } from "../../../utils/fonts/fonts";

export default function Test() {
  console.log("test");
  return (
    <>
      <div>Here is text-decoration-style: page</div>
      <div className={`${biz_udGothic700.className}`}>
        User Profile Icon biz_udGothic700
      </div>
    </>
  );
}
