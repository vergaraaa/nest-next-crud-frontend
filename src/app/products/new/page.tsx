import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "./product-form";

const ProductsNewPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="min-w-[400px]">
        <CardHeader>
          <CardTitle>Create product</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsNewPage;
