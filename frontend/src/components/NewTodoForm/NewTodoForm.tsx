import { zodResolver } from "@hookform/resolvers/zod";
import type { CategoryResponse } from "../../services/category-services";
import { type TodoFormData, schema } from "./schema";
import { useForm } from "react-hook-form";
import styles from "./NewTodoForm.module.scss";

interface NewTodoFormProps {
  categories: CategoryResponse[];
  onSubmit: (data: TodoFormData) => unknown;
}

export const NewTodoForm = ({ categories, onSubmit }: NewTodoFormProps) => {
  const {
    formState: { errors, isSubmitSuccessful },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Reset form on success
  if (isSubmitSuccessful) {
    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Task Name</label>
        <input
          type="text"
          className={styles.input}
          placeholder="What needs to be done?"
          {...register("title")}
        />
        {errors.title?.message && (
          <small className={styles.error}>{errors.title?.message}</small>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Category</label>
        <select className={styles.select} {...register("categoryId")}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.categoryId?.message && (
          <small className={styles.error}>{errors.categoryId?.message}</small>
        )}
      </div>

      <button className={styles.button} type="submit">
        Add Task
      </button>
    </form>
  );
};
