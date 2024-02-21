"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-grey-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Product Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-grey-500" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-grey-500" />}
            />
          </div>
        </div>
      </div>
      {/*todo: add description*/}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        {/** TODO: fix Property 'name' does not exist on type 'string' */}
        {/** @ts-ignore */}
        <p className="text-sm text-grey-500">{data.category?.name}</p>
      </div>
      {/*todo: price*/}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
