import { zodResolver } from "@hookform/resolvers/zod";
import { type CategoryFormData, schema } from "./schema";
import { useForm } from "react-hook-form";
import styles from "./NewCategoryForm.module.scss";

interface NewCategoryFormProps {
  onSubmit: (data: CategoryFormData) => unknown;
}

export const NewCategoryForm = ({ onSubmit }: NewCategoryFormProps) => {
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
        <input
          type="text"
          className={styles.input}
          placeholder="New category name..."
          {...register("name")}
        />
        {errors.name?.message && (
          <small className={styles.error}>{errors.name?.message}</small>
        )}
      </div>

      <button className={styles.button} type="submit">
        Add Category
      </button>
    </form>
  );
};
