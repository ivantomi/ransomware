"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const Redirect = (page) => {
    return () => router.push(`/${page}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <p>Yo man, wanna get a free gitf? Go ahaed and sign up for FREE</p>
      <div className="w-full flex flex-row justify-center items-center bg-green-400 h-[50px] text-2xl pl-2">
        <div className="w-300px items-center flex justify-center gap-5">
          <button onClick={Redirect("signin")}>Login</button>
          <button onClick={Redirect("signup")}>Registre</button>
        </div>
      </div>
    </main>
  );
}
