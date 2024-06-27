import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthContainer = ({
  classname,
  children,
}: {
  classname?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("max-w-screen-xl p-2 mx-auto", classname)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
