import type { CategoryResponse } from "../../services/category-services";
import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
  category: CategoryResponse;
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return <span className={styles.badge}>{category.name}</span>;
};
