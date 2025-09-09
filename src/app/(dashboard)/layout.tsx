import { Header } from "@/shared/components/layout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-full transition-all">
      <Header />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
};

export default layout;
