import { useEffect, useState } from "react";

import "./App.css";
import {
  type CategoryResponse,
  getAllCategories,
} from "./services/category-services";
import { CategoryCard } from "./components/CategoryCard";

function App() {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  useEffect(() => {
    getAllCategories().then(setCategories).catch(console.error);
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
