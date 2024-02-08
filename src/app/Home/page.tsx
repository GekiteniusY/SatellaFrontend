// サインイン状態でなくともアクセス可能なページ
import { logout } from "../auth/actions";

export default function Home() {
  return (
    <div>
      Home
      <br />
      <form>
        <button formAction={logout}>Logout</button>
      </form>
    </div>
  );
}
