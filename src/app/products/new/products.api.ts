export const getProducts = async () => {
  const res = await fetch("http://localhost:4000/api/products", {
    cache: "no-store",
  });

  const data = await res.json();

  return data;
};

export const createProduct = async (productData: any) => {
  const res = await fetch("http://localhost:4000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();
};

export const deleteProduct = async (id: number) => {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
