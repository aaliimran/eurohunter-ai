// "use client";
// import React from "react";
// import Image from "next/image";
// import { redirect } from "next/navigation";
// import { signIn, useSession } from "next-auth/react";

// const GoogleAuthButton = () => {
//   const { status } = useSession();

//   if (status === "loading") {
//     return <p>Loading ...</p>;
//   }
//   if (status === "authenticated") {
//     redirect("/pages/auth/start/");
//   }

//   return (
//     <div className="w-[107%] flex pt-[38px]">
//       <button
//         className="w-full flex p-4 px-5 justify-center items-center gap-2 rounded-lg border border-gray-300 relative "
//         onClick={() => signIn("google")}
//       >
//         <Image
//           className="absolute left-4"
//           src="/icons/auth-icons/google.svg"
//           alt="Google Icon"
//         />
//         <span className="text-black font-sans text-lg font-semibold leading-[128%] tracking-[0.064px]">
//           Continue with Google
//         </span>
//       </button>
//     </div>
//   );
// };

// export default GoogleAuthButton;

"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GoogleAuthButton = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/pages/auth/start/");
  };

  return (
    <div className="w-[107%] flex pt-[38px]">
      <button
        className="w-full flex p-4 px-5 justify-center items-center gap-2 rounded-lg border border-gray-300 relative "
        onClick={handleRedirect}
      >
        <Image
          className="absolute left-4"
          src="/icons/auth-icons/google.svg"
          alt="Google Icon"
        />
        <span className="text-black font-sans text-lg font-semibold leading-[128%] tracking-[0.064px]">
          Continue without Google
        </span>
      </button>
    </div>
  );
};

export default GoogleAuthButton;
