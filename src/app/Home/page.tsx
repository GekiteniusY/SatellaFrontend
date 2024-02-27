import { logout } from "../auth/actions";
import { biz_udGothic400, biz_udGothic700 } from "../../../utils/fonts/fonts";

export default function Home() {
  return (
    <div>
      <div className='p-5 '>
        <p className='font-mono text-5xl'>Welcome Sattela</p>
        <p>Sattela provide your sattelite office.</p>
      </div>
      <div className='pt-10'>
        <p className='text-2xl'>直近の予約</p>
      </div>
      <div className='pt-10'>
        <p className='text-2xl'>Bookmark</p>
      </div>
      <div>User Profile Icon</div>
      <div className={`${biz_udGothic700.className}`}>
        User Profile Icon biz_udGothic700
      </div>
      <br />
      <form>
        <button formAction={logout}>Logout</button>
      </form>
    </div>
  );
}
