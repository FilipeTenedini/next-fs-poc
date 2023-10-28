import { Badge } from "@/components/ui/Badge";
import { CATEGORY_ICON } from "@/constants/categoryIcon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {


  return (
    <Link href={`category/${category.slug}`}>
      <Badge variant="outline" className="py-3 flex justify-center items-center gap-2 rounded-lg">
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
}

export default CategoryItem;