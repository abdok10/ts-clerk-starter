import { SignedIn } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return (
      <div className="mt-10 text-start max-w-xl mx-auto bg-neutral-600 p-5 rounded">
        <h1 className="text-2xl font-bold text-center">
          You are not logged in
        </h1>
        <div className="flex gap-10 justify-center mt-8">
          <Link href="/sign-in" className="flex gap-2 hover:scale-110 hover:text-cyan-300 hover:underline transition-all">
            Sign In
            <ArrowDownRight className="hover:rotate-270 scale-100 transition-all"/>
          </Link>
          <Link href="/sign-up" className="flex gap-2 hover:scale-110 hover:text-cyan-300 hover:underline transition-all">
            Sign Up
            <ArrowDownRight className="hover:rotate-270 scale-100 transition-all"/>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 text-start max-w-xl mx-auto bg-neutral-600 p-5 rounded">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <ul className="list-none mt-10">
        <li className="mb-2">
          <span className="font-semibold">First Name:</span> {user.firstName}
        </li>
        <li className="mb-2">
          <span className="font-semibold">Last Name:</span> {user.lastName}
        </li>
        <li className="mb-2">
          <span className="font-semibold">Email:</span>{" "}
          {user.emailAddresses[0].emailAddress}
        </li>
      </ul>
    </div>
  );
}
