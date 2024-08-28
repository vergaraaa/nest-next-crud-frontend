export const getProducts = async () => {
  const res = await fetch("http://localhost:4000/api/products", {
    cache: "no-store",
  });

  const data = await res.json();

  return data;
};

export const getProduct = async (id: string) => {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
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

export const updateProduct = async (id: string, productData: any) => {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    cache: "no-store",
  });

  const data = await res.json();

  return data;
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
