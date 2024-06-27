"use client";
import React, { useEffect, useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useSession } from "@/providers/SessionProvider";
import { logout } from "@/actions/logout";
const Header = () => {
  
  const { user } = useSession();

  const signout = async () => {
    logout();
  };

  return (
    <header className="h-14 bg-slate-200 border-b border-b-gray-50">
      <MaxWidthContainer classname="h-full flex items-center justify-between">
        <h1>Logo</h1>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <PersonIcon className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem onClick={signout}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/auth/login">Login</Link>
              </li>
              <li>
                <Link href="/auth/register">Sign up</Link>
              </li>
            </ul>
          </nav>
        )}
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
