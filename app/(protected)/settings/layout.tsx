"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/settings") {
      router.push("/settings/accounts");
    }
  }, [pathname, router]);

  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold flex flex-row">
        Settings
        <div className="sm:hidden flex items-end ml-auto">
          <Sheet>
            <SheetTrigger className="sm:hidden p-2 text-gray-600">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-5">
              <SheetTitle>Settings</SheetTitle>
              <ul>
                {[
                  { name: "User Info", path: "/settings/accounts" },
                  { name: "Profile", path: "/settings/users" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className={`block mt-5 cursor-pointer border-l-2 px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700 ${
                        pathname === item.path
                          ? "border-l-blue-700 text-blue-700"
                          : "border-transparent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </h1>
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
        <div className="col-span-2 hidden sm:block">
          <ul>
            {[
              { name: "User Info", path: "/settings/accounts" },
              { name: "Edit Profile", path: "/settings/edit-profile" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`block mt-5 cursor-pointer border-l-2 px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700 ${
                    pathname === item.path
                      ? "border-l-blue-700 text-blue-700"
                      : "border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
