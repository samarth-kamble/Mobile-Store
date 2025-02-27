"use client";
import { UserButton } from "@/components/auth/UserButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { User2 } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { FaUser } from "react-icons/fa";

const UserInfoPage = () => {
  const user = useCurrentUser();
  const router = useRouter();
  return (
    <div className="w-full h-full space-y-4 mb-10">
      <h1 className="border-b py-6 text-2xl font-semibold flex flex-row gap-3">
        <User2 className="size-7" />
        User Profile
      </h1>
      <div className="mt-6 flex items-center space-y-4 justify-center flex-col">
        <Avatar className="w-32 h-32">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white h-10 w-10" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">ID</p>
        <p className=" text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
          {user?.id}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">Name</p>
        <p className=" text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
          {user?.name}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">Email</p>
        <p className=" text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
          {user?.email}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">Role</p>
        <p className=" text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
          {user?.role}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">Two Factor Authentication</p>

        <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
          {user?.isTwoFactorEnabled ? "ON" : "OFF"}
        </Badge>
      </div>

      <Button
        className="bg-sky-700 flex items-end ml-auto"
        onClick={() => router.push("/settings/edit-profile")}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default UserInfoPage;
