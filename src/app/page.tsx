import Link from "next/link";

export default function App() {
  return (
    <div>
      landing{" "}
      <div>
        <nav>
          <Link href="/pages/auth/login">sign-up, sign-in</Link>
        </nav>
      </div>
    </div>
  );
}
