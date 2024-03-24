import { Product } from "@/types/ecom";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};
export default getProduct;
