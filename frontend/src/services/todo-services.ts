const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export type todoResponse = {
  id: number;
  title: string;
  categoryId: number;
};

export const getAllCategories = async () => {
  const response = await fetch(BACKEND_URL + "/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return (await response.json()) as todoResponse;
};
