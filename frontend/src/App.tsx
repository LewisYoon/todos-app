import { useEffect, useState } from "react";

import "./App.css";
import {
  type CategoryResponse,
  createCategory,
  getAllCategories,
} from "./services/category-services";
import {
  type TodoResponse,
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "./services/todo-services";
import { TodoCard } from "./components/TodoCard";
import { NewTodoForm } from "./components/NewTodoForm/NewTodoForm";
import type { TodoFormData } from "./components/NewTodoForm/schema";
import { NewCategoryForm } from "./components/NewCategoryFrom/NewCategoryForm";
import type { CategoryFormData } from "./components/NewCategoryFrom/schema";
import { CategoryCard } from "./components/CategoryCard";

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

  const handleTodoUpdate = async (id: number, title: string, categoryId: number) => {
    try {
      const updatedTodo = await updateTodo(id, { title, categoryId });
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleTodoDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
      <NewCategoryForm onSubmit={handleCategorySubmit} />

      <div>
        {categories.length > 0 && (
          <NewTodoForm categories={categories} onSubmit={handleTodoSubmit} />
        )}
      </div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          categories={categories}
          onUpdate={handleTodoUpdate}
          onDelete={handleTodoDelete}
        />
      ))}
    </div>
  );
}

export default App;
