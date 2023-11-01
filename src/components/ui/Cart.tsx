import { ShapesIcon } from "lucide-react";
import { Badge } from "./Badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <Badge className="w-fit gap-1 border border-primary px-3 py-1 text-base uppercase" variant="outline">
        <ShapesIcon size={16}/>
        Catálogo
      </Badge>

      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
}

export default Cart;