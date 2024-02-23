"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import { ShoppingCart } from "lucide-react";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const onAddToCart = () => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <h3 className="text-black">
            <div className="font-semibold">Size: {data?.size?.name}</div>
          </h3>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          ></div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mt-5 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
