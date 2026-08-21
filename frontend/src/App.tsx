import { useEffect, useState } from "react";

import "./App.css";
import {
  type CategoryResponse,
  createCategory,
  getAllCategories,
} from "./services/category-services";
import { CategoryCard } from "./components/CategoryCard";
import {
  type TodoResponse,
  createTodo,
  getAllTodos,
} from "./services/todo-services";
import { TodoCard } from "./components/TodoCard";
import { NewTodoForm } from "./components/NewTodoForm/NewTodoForm";
import type { TodoFormData } from "./components/NewTodoForm/schema";
import { NewCategoryForm } from "./components/NewCategoryFrom/NewCategoryForm";
import type { CategoryFormData } from "./components/NewCategoryFrom/schema";

function App() {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [todos, setTodos] = useState<TodoResponse[]>([]);
  useEffect(() => {
    getAllCategories().then(setCategories).catch(console.error);
    getAllTodos().then(setTodos).catch(console.error);
  }, []);

  const handleTodoSubmit = async (data: TodoFormData) => {
    const todo = await createTodo(data);
    setTodos([...todos, todo]);
  };
  const handleCategorySubmit = async (data: CategoryFormData) => {
    const category = await createCategory(data);
    setCategories([...categories, category]);
  };

  return (
    <div>
      <NewCategoryForm onSubmit={handleCategorySubmit} />

      <div>
        {categories.length > 0 && (
          <NewTodoForm categories={categories} onSubmit={handleTodoSubmit} />
        )}
      </div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
