import type { CategoryResponse } from "../services/category-services";

type CategoryCardProps = {
  category: CategoryResponse;
};
export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div>
      <h2>{category.name}</h2>
    </div>
  );
};
