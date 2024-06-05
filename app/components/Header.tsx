import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-[1000px] m-auto flex justify-between items-center bg-gray-700 mt-2 rounded-xl px-5 py-2">
      <Link href="/" className="text-2xl font-bold">
        {"Abd'Ou"}
      </Link>
      <nav className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
      </nav>
      <span className="text-lg">
        <SignedOut>
          <div className="flex gap-4">
            <span className="hover:underline hover:text-xl transition-all">
              <Link href={"sign-in"}>Sign-in</Link>
            </span>
            <span className="hover:underline hover:text-xl transition-all">
              <Link href={"sign-up"}>Sign-up</Link>
            </span>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            <Link href={"dashboard"}>Dashboard</Link>
            <UserButton />
          </div>
        </SignedIn>
      </span>
    </header>
  );
}
