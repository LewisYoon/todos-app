import type { CategoryFormData } from "../components/NewCategoryFrom/schema";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export type CategoryResponse = {
  id: number;
  name: string;
};

export const getAllCategories = async () => {
  const response = await fetch(BACKEND_URL + "/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return (await response.json()) as CategoryResponse[];
};

export const createCategory = async (data: CategoryFormData) => {
  const response = await fetch(BACKEND_URL + "/categories", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to create category");
  }
  return (await response.json()) as CategoryResponse;
};
