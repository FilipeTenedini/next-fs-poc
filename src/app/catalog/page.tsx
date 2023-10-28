import { Badge } from "@/components/ui/Badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CatalogItem from "./components/CatalogItem";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge className="w-fit gap-1 border border-primary px-3 py-1 text-base uppercase" variant="outline">
        <ShapesIcon size={16}/>
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-7">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
      <div>fpijdspafjsdi</div>
    </div>
  );
}

export default CatalogPage;