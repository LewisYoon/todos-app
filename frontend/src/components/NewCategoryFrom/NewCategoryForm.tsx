import { zodResolver } from "@hookform/resolvers/zod";
import { type CategoryFormData, schema } from "./schema";
import { useForm } from "react-hook-form";

interface NewCategoryFormProps {
  onSubmit: (data: CategoryFormData) => unknown;
}
export const NewCategoryForm = ({ onSubmit }: NewCategoryFormProps) => {
  const {
    formState: { errors, isSubmitSuccessful },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Task Categories</h1>
      <div>
        <input
          type="text"
          placeholder="type category here..."
          {...register("name")}
        />
        <small>{errors.name?.message}</small>
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
