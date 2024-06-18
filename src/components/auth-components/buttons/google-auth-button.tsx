"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";

const GoogleAuthButton = () => {
  const { data: session, status } = useSession();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      setUserEmail(session.user.email || null);
      setUserName(session.user.name || null);
    }
  }, [session]);

  if (status === "loading") {
    return <p>Loading ...</p>;
  }
  if (status === "authenticated") {
    // return (
    //   <div>
    //     <p>Email: {userEmail}</p>
    //     <p>Name: {userName}</p>
    //     <button
    //       className="w-full flex p-4 px-5 justify-center items-center gap-2 rounded-lg border border-gray-300 relative"
    //       onClick={() => signOut()}
    //     >
    //       Logout
    //     </button>
    //   </div>
    // );
    redirect("/pages/auth/start");
  }
  // if (status === "unauthenticated") {
  //   redirect("/pages/auth/login");
  // }
  return (
    <div className="w-[107%] flex pt-[38px]">
      <button
        className="w-full flex p-4 px-5 justify-center items-center gap-2 rounded-lg border border-gray-300 relative "
        onClick={() => signIn("google")}
      >
        <img
          className="absolute left-4"
          src="/icons/pages-icons/auth-icons/login-icons/google.svg"
          alt="Google Icon"
        />
        <span className="text-black font-sans text-lg font-semibold leading-[128%] tracking-[0.064px]">
          Continue with Google
        </span>
      </button>
    </div>
  );
};

export default GoogleAuthButton;
