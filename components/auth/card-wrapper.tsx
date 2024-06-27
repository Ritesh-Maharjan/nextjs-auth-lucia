"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { buttonVariants } from "../ui/button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md flex flex-col items-center ">
      <CardHeader className="text-center">
        <CardTitle>FullStack</CardTitle>
        <CardDescription>{headerLabel}</CardDescription>
      </CardHeader>
      <CardContent className="w-full">{children}</CardContent>
      <CardFooter>
        <Link
          className={buttonVariants({ variant: "link" })}
          href={backButtonHref}
        >
          {backButtonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
};
