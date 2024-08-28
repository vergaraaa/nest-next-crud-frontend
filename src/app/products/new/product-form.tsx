"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createProduct, updateProduct } from "./products.api";
import { useParams, useRouter } from "next/navigation";

interface Props {
  product: any;
}

const ProductForm = ({ product }: Props) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const { register, handleSubmit } = useForm({
    defaultValues: { ...product },
  });

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProduct(params.id, {
        ...data,
        price: parseFloat(data.price),
      });
    } else {
      await createProduct({ ...data, price: parseFloat(data.price) });
    }

    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Name</Label>
      <Input {...register("name")} />

      <Label>Description</Label>
      <Input {...register("description")} />

      <Label>Price</Label>
      <Input {...register("price")} />

      <Label>Image</Label>
      <Input {...register("image")} />

      <Button className="mt-5">{params.id ? "Edit" : "Create Product"}</Button>
    </form>
  );
};

export default ProductForm;
