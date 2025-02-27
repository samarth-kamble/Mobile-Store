"use client";

import {
  BarChart,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
      <SidebarMenu>
        {adminMenuItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild size="lg">
              <Link
                href={item.url}
                className={item.isActive ? "font-bold bg-gray-300" : ""}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export type AdminMenuItem = {
  title: string;
  url: string;
  isActive?: boolean;
  icon?: LucideIcon;
};

export const adminMenuItems: AdminMenuItem[] = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
    isActive: true,
  },
  { title: "Orders", url: "/admin/orders", icon: ShoppingCart },
  { title: "Products", url: "/admin/products", icon: Package },
  { title: "Customers", url: "/admin/customers", icon: Users },
  { title: "Reports", url: "/admin/reports", icon: BarChart },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];
