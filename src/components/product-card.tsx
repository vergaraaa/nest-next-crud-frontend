"use client";

import { deleteProduct } from "@/app/products/new/products.api";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useRouter } from "next/navigation";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();

  const handleRemoveProduct = async (id: number) => {
    await deleteProduct(id);
    router.refresh();
  };

  return (
    <Card key={product.id}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span
            className="cursor-pointer"
            onClick={() => router.push(`/products/${product.id}`)}
          >
            {product.name}
          </span>

          <span className="text-sm font-bold text-gray-500">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>

      <img
        className="cursor-pointer"
        src={product.image}
        onClick={() => router.push(`/products/${product.id}`)}
      />

      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/products/${product.id}/edit`);
          }}
        >
          Edit
        </Button>

        <Button
          variant="destructive"
          onClick={() => handleRemoveProduct(product.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
