const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const listProduct = async () => {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error");
  }

  return data;
};

export const getProduct = async (id: number) => {
  const res = await fetch(`${API_URL}/products/${id}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error");
  }

  return data;
}
