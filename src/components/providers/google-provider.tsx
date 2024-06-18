"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type AuthGoogoleProviderProps = {
  children: ReactNode;
};

const authGoogleProvider = ({ children }: AuthGoogoleProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default authGoogleProvider;
