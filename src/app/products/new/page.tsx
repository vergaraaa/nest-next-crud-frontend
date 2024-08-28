import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "./product-form";
import { getProduct } from "./products.api";

interface Props {
  params: {
    id: string;
  };
}

const ProductsNewPage = async ({ params }: Props) => {
  const product = await getProduct(params.id);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="min-w-[400px]">
        <CardHeader>
          <CardTitle>{params.id ? "Edit product" : "Create product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsNewPage;
