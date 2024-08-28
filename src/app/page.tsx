import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/new/products.api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <div className="flex justify-between pt-5">
        <h1 className="text-4xl font-bold">Nest Next App</h1>

        <Link href="/products/new" className={buttonVariants()}>
          Create New Product
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-3 pt-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {product.name}
                <span className="text-sm font-bold text-gray-500">
                  ${product.price}
                </span>
              </CardTitle>
            </CardHeader>

            <img src={product.image} alt="" />

            <CardContent>
              <p>{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Buy</Button>
              <Button variant="destructive">Delete</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomePage;
