import { useState } from "react";
import type { TodoResponse } from "../../services/todo-services";
import type { CategoryResponse } from "../../services/category-services";
import type { TodoFormData } from "../NewTodoForm/schema";
import styles from "./TodoCard.module.scss";

type TodoCardProps = {
  todo: TodoResponse;
  categories: CategoryResponse[];
  onUpdate: (id: number, data: TodoFormData) => void;
  onDelete: (id: number) => void;
};

export const TodoCard = ({
  todo,
  categories,
  onUpdate,
  onDelete,
}: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [categoryId, setCategoryId] = useState(todo.category.id);

  const handleUpdate = () => {
    onUpdate(todo.id, { title, categoryId });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={styles.card}>
        <div className={styles.editForm}>
          <div className={styles.editRow}>
            <input
              type="text"
              className={styles.editInput}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task name"
            />
            <select
              className={styles.editSelect}
              value={categoryId}
              onChange={(e) => setCategoryId(Number(e.target.value))}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.actions}>
            <button className={styles.saveBtn} onClick={handleUpdate}>
              Save
            </button>
            <button
              className={styles.cancelBtn}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{todo.title}</h3>
        <span className={styles.categoryBadge}>{todo.category.name}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
