import { useState } from "react";
import type { TodoResponse } from "../services/todo-services";
import type { CategoryResponse } from "../services/category-services";

type TodoCardProps = {
  todo: TodoResponse;
  categories: CategoryResponse[];
  onUpdate: (id: number, title: string, categoryId: number) => void;
  onDelete: (id: number) => void;
};

export const TodoCard = ({ todo, categories, onUpdate, onDelete }: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [categoryId, setCategoryId] = useState(todo.category.id);

  const handleUpdate = () => {
    onUpdate(todo.id, title, categoryId);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <h2>{todo.category.name}</h2>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};
