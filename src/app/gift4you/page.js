"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  const Redirect = (page) => {
    return () => router.push(`/${page}`);
  };

  return (
    <>
      <div className="w-full flex flex-row justify-start items-center bg-green-400 h-[50px] text-2xl pl-2">
        <div className="w-300px items-center flex justify-center gap-5">
          <p>Gift4You</p>

          <button onClick={Redirect("signin")}>Login</button>
          <button onClick={Redirect("signup")}>Registre</button>
        </div>
      </div>
      <div className="justify-center items-center h-screen w-full flex flex-col text-3xl ">
        <h1 className="my-8">
          Welcome {user.email.split("@")[0]}! Downloud program from botun below
          to clajm yours gift!
        </h1>

        <div className="flex flex-col w-[450px] border-white border-[3px] justify-center py-4">
          <div className="flex flex-row items-stretch justify-around border-b-[2px] border-pink-500 pb-2">
            <img
              className="w-[40px] h-[40px]"
              src="https://media.npr.org/assets/img/2012/02/17/6874.5_01c91ebc_custom-19a59dc2b8d087677aaed0ebf4055fc5e11a1f80-s800-c85.png"
              alt="ad"
            />
            <p>Virus detectd (4)</p>
          </div>
          <div className="flex flex-col text-lg items-center pb-3">
            <p>Yours computer are infected with a dangerous virus</p>
            <p>Click Click me to remove all viruses</p>
          </div>
          <div className="justify-center flex">
            <a href="https://download.moodle.org/download.php/stable402/moodle-latest-402.zip">
              <button className="border-pink-500 border-[2px] p-2 bg-pink-500 ">
                Click me
              </button>
            </a>
          </div>
        </div>

        <div className="py-20 text-9xl">
          <a>
            <button
              onClick={Redirect("creditcard")}
              className=" rounded-full border-x-lime-500-[4px] p-5"
              id="uglee"
            >
              CLICK ME!!&lt;/button&gt;
            </button>
          </a>
        </div>

        <div className="w-full flex flex-row justify-center items-center bg-green-400 h-screen text-2xl">
          <div className="w-300px items-center flex justify-center">
            <p>@ All lefts reserved 2019</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
