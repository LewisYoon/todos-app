import { zodResolver } from "@hookform/resolvers/zod";
import type { CategoryResponse } from "../../services/category-services";
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
      <div>
        <label>Title</label>
        <input type="text" {...register("name")} />
        <small>{errors.name?.message}</small>
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
