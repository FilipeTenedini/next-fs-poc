"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import DiscountBadge from "@/components/ui/DiscountBadge";
import { ProductWithTotalPrice } from "@/helpers/computeProductTotalPrice";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice,
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prevState) => prevState === 1 ? prevState : prevState - 1);
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prevState) => prevState + 1);
  }

  const handleAddProductToCartClick = () => {
    addProductToCart({ ...product, quantity })
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold">{product.totalPrice.toFixed(2)}</h3>
        {product.discountPercent > 0 && (
          <DiscountBadge>
            {product.discountPercent}
          </DiscountBadge>
        )}
      </div>

      {product.discountPercent > 0 && (
        <p className="opacity-75 text-sm line-through">R$ {Number(product.basePrice).toFixed(2)}</p>
      )}

      <div className="flex items-center gap-2 mt-4">
        <Button size="icon" variant="outline">
           <ArrowLeftIcon size={16} onClick={handleDecreaseQuantityClick} />
        </Button>

        <span>
          {quantity}
        </span>

        <Button size="icon" variant="outline">
           <ArrowRightIcon size={16} onClick={handleIncreaseQuantityClick} />
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-sm opacity-75">{product.description}</p>
      </div>

      <Button className="uppercase mt-8 font-bold" onClick={handleAddProductToCartClick}>
        Adicionar ao carrinho
      </Button>

      <div className="bg-accent flex items-center justify-between px-5 py-2 mt-5 rounded-lg">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FTPacket</span>
            </p>
            <p className="text-primary text-xs">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="font-bold text-xs">
          Frete grátis
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;