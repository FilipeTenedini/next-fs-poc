"use client";

import { LogInIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { status } = useSession();


  const handleLoginClick = async () => {
    await signIn();
  }

  const handleLogoutClick = async () => {
    await signOut();
  }

  return (
    <Button
      onClick={status === "authenticated" ? handleLogoutClick : handleLoginClick}
      variant="outline"
      className="w-full justify-start gap-2"
    >
      <LogInIcon size={16}/>
      Fazer {status === "authenticated"  ? "Logout" : "Login"}
    </Button>
  );
}

export default AuthButton;