"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createProduct } from "./products.api";
import { useRouter } from "next/navigation";

const ProductForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await createProduct({ ...data, price: parseFloat(data.price) });

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

      <Button className="mt-5">Create Product</Button>
    </form>
  );
};

export default ProductForm;
