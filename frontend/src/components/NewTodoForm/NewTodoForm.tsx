import { zodResolver } from "@hookform/resolvers/zod";
import type { CategoryResponse } from "../../services/category-services";
import { type TodoFormData, schema } from "./schema";
import { useForm } from "react-hook-form";

interface NewTodoFormProps {
  categories: CategoryResponse[];
  onSubmit: (data: TodoFormData) => unknown;
}
export const NewTodoForm = ({ categories, onSubmit }: NewTodoFormProps) => {
  const { formState, register, handleSubmit } = useForm<TodoFormData>({
    resolver: zodResolver(schema),
  });
  console.log(formState);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input type="text" {...register("title")} />
        <small></small>
      </div>
      <div>
        <label>Category</label>
        <select {...register("categoryId")}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <small></small>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
