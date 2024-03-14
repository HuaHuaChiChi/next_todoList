"use client";

import { getTodos } from "@/app/todoAPI/todoAPI";
import { Todo } from "@/type/todoType";
import BaseButton from "@/app/util/BaseButton";
import {
  useDeleteToDoMutation,
  useToggleToDoMutation,
} from "@/app/util/todosHook";
import { useQuery } from "@tanstack/react-query";

const TodoCard = ({ isDone }: { isDone: Boolean }) => {
  const {
    data: todoItems,
    isPending,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const { handleDelete } = useDeleteToDoMutation();
  const { handleToggle } = useToggleToDoMutation();

  const todos: Todo[] = todoItems?.todos || [];
  const filteredTodos = todos?.filter((item) => item.isDone === isDone);

  if (isPending) return <p>로딩링동</p>;

  return (
    <div>
      {filteredTodos?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.contents}</p>
          {item.isDone ? (
            <div>
              <BaseButton onClick={() => handleDelete(item.id)}>
                삭제
              </BaseButton>
              <BaseButton onClick={() => handleToggle(item)}>취소</BaseButton>
            </div>
          ) : (
            <BaseButton onClick={() => handleToggle(item)}>완료</BaseButton>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
