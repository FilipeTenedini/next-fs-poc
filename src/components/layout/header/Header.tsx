import { HomeIcon, ListOrderedIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/Sheet";
import AuthButton from "./AuthButton";
import AuthenticatedHeaderTop from "./AuthenticatedHeaderTop";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <AuthenticatedHeaderTop />

          <div className="mt-2 flex flex-col gap-2">
            <AuthButton />

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16}/>
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16}/>
              Ofertas
            </Button>

            <SheetClose asChild>
              <Link href={"/catalog"}>
                <Button variant="outline" className="w-full justify-start gap-2">
                    <ListOrderedIcon size={16}/>
                    Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      
      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
          <ShoppingCartIcon />
      </Button>
    </Card>
    );
}

export default Header;