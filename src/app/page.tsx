import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex justify-between pt-5">
      <h1 className="text-4xl font-bold">Nest Next App</h1>

      <Link href="/products/new" className={buttonVariants()}>
        Create New Product
      </Link>
    </div>
  );
};

export default HomePage;
