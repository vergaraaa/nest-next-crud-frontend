import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/new/products.api";
import ProductCard from "@/components/product-card";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between pt-5">
        <h1 className="text-4xl font-bold">Nest Next App</h1>

        <Link href="/products/new" className={buttonVariants()}>
          Create New Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 pt-3">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
