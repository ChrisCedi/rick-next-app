import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return (
    <div className="pt-24 pb-12 px-8 md:px-20 2xl:px-44 min-h-screen">
      {children}
    </div>
  );
}
