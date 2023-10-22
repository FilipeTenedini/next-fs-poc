"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/Separator";

const AuthenticatedHeaderTop = () => {
  const { status, data } = useSession();

  return (
    <>
      {status === "authenticated" && data?.user && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2 py-4">
            <Avatar>
                <AvatarFallback>
                  {data?.user?.name?.[0].toUpperCase()}
                </AvatarFallback>
                {data?.user?.image &&
                  <AvatarImage src={data?.user?.image} className="rounded-full w-10"/>
                }
            </Avatar>
            <div className="flex flex-col">
              <p className="font-medium">{data?.user?.name}</p>
              <p className="text-sm opacity-75">Boas compras!</p>
            </div>
          </div>

            <Separator />

        </div>
        )
      }
    </>
  );
}

export default AuthenticatedHeaderTop;