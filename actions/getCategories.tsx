import { Category } from "@/types/ecom";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(url);
  return res.json();
};
export default getCategories;
