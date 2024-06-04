import {
  SignInButton,
  SignOutButton,
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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <span className="text-lg">
        <SignedOut>
          <div className="flex gap-4">
            <span className="hover:underline hover:text-xl transition-all">
              <SignInButton />
            </span>
            <span className="hover:underline hover:text-xl transition-all">
              <SignOutButton />
            </span>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </span>
    </header>
  );
}
