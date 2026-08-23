import type { TodoFormData } from "../components/NewTodoForm/schema";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export type TodoResponse = {
  id: number;
  title: string;
  category: {
    id: number;

    name: string;
  };
};

export const getAllTodos = async () => {
  const response = await fetch(BACKEND_URL + "/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return (await response.json()) as TodoResponse[];
};

export const createTodo = async (data: TodoFormData) => {
  const response = await fetch(BACKEND_URL + "/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  return (await response.json()) as TodoResponse;
};

export const updateTodo = async (id: number, data: TodoFormData) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  return (await response.json()) as TodoResponse;
};

export const deleteTodo = async (id: number) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};
