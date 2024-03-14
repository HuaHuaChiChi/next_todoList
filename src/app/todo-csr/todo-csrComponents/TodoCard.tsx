"use client";

import { getTodos } from "@/app/todoAPI/todoAPI";
import { Todo } from "@/type/todoType";
import { useQuery } from "@tanstack/react-query";

const TodoCard = ({ isDone }: { isDone: Boolean }) => {
  const {
    data: todoItems,
    isPending,
    error,
  } = useQuery({
    queryFn: getTodos,
    queryKey: ["todos"],
  });

  const todos: Todo[] = todoItems?.todos || [];
  console.log(todos);

  if (isPending) return <p>로딩링동</p>;

  return (
    <div>
      {todos?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
