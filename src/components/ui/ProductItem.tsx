import { ProductWithTotalPrice } from "@/helpers/computeProductTotalPrice";
import Image from "next/image";
import { Badge } from "./Badge";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative w-full h-[170px] flex justify-center bg-accent rounded-lg items-center">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
        {product.discountPercent > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDown size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
          <p className="w-full text-sm truncate">
            {product.name}
          </p>

          <div className="flex items-center gap-2 truncate">
            {product.discountPercent > 0
            ? (
                <>
                  <p className="font-semibold">
                    R$ {product.totalPrice.toFixed(2)}
                  </p>
                  <p className="opacity-75 line-through text-xs">
                    R$ {Number(product.basePrice).toFixed(2)}
                  </p>
                </>
            ) : (
                <p className="opacity-75 line-through text-xs">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
            )}


          </div>
      </div>
    </div>
  );
}

export default ProductItem;