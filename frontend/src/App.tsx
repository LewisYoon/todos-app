import { useEffect, useState } from "react";

import styles from "./App.module.scss";
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
import { TodoCard } from "./components/TodoCard/TodoCard";
import { NewTodoForm } from "./components/NewTodoForm/NewTodoForm";
import type { TodoFormData } from "./components/NewTodoForm/schema";
import { NewCategoryForm } from "./components/NewCategoryFrom/NewCategoryForm";
import type { CategoryFormData } from "./components/NewCategoryFrom/schema";
import { CategoryCard } from "./components/CategoryCard/CategoryCard";

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

  const handleTodoUpdate = async (id: number, data: TodoFormData) => {
    try {
      const updatedTodo = await updateTodo(id, data);
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TODO APP</h1>
        <p>Enter your plan!</p>
      </header>

      <div className={styles.dashboard}>
        <aside className={styles.sidebar}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Categories</h2>
            <div className={styles.categoriesWrapper}>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))
              ) : (
                <p className={styles.emptyState}>No categories</p>
              )}
            </div>
            <NewCategoryForm onSubmit={handleCategorySubmit} />
          </section>
        </aside>

        <main className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Create New Task</h2>
            {categories.length > 0 ? (
              <NewTodoForm
                categories={categories}
                onSubmit={handleTodoSubmit}
              />
            ) : (
              <p className={styles.emptyState}>
                Create a category first to add tasks
              </p>
            )}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Tasks</h2>
            <div className={styles.todosWrapper}>
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    categories={categories}
                    onUpdate={handleTodoUpdate}
                    onDelete={handleTodoDelete}
                  />
                ))
              ) : (
                <p className={styles.emptyState}>
                  No tasks yet. Enjoy your day!
                </p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
