import React from "react";
import Navbar from "./_components/Navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default ProtectedLayout;
