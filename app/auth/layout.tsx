import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-sky-400">
      {children}
    </div>
  );
};

export default layout;
