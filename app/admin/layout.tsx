import RoleGate from "@/components/auth/RoleGate";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <RoleGate allowedRole={"ADMIN"}>{children}</RoleGate>
    </div>
  );
};

export default AdminLayout;
