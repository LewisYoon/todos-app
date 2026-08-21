import type { todoResponse } from "../services/todo-services";

type TodoCardProps = {
  todo: todoResponse;
};
export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <h2>{todo.category.name}</h2>
    </div>
  );
};
