import Link from "next/link";
import Landing from "./pages/landing/page";

export default function App() {
  return (
    <div>
      <Landing />
      <div>
        <nav>
          {/* <Link href="/pages/auth/login">sign-up, sign-in</Link> */}
        </nav>
      </div>
    </div>
  );
}
