"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export function Navbar({ authProviders }: { authProviders: React.ReactNode }) {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center" href={"/"}>
        <Image
          src={"/assets/images/logo.svg"}
          alt="Promptopia Logo"
          width={32}
          height={32}
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/prompt"} className="black_btn">
              Share Prompt
            </Link>
            <button
              type="button"
              className="outline_btn"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src={session.user.image || ""}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>{authProviders}</>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session.user.image || ""}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href="/prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Share Prompt
                </Link>

                <button
                  className="black_btn w-full mt-5"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  type="button"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>{authProviders}</>
        )}
      </div>
    </nav>
  );
}
