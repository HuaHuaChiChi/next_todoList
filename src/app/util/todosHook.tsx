"use client";
import { addTodo, deleteTodo, toggleTodo } from "@/app/todoAPI/todoAPI";
import { NewTodo, Todo } from "@/type/todoType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteToDoMutation = () => {
  const queryClient = useQueryClient();
  const deleteToDoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: async () => {
      console.log("성공적으로 삭제되었습니다.");
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleDelete = (id: string) => {
    deleteToDoMutation.mutate(id);
  };
  return { handleDelete };
};

export const useToggleToDoMutation = () => {
  const queryClient = useQueryClient();
  const ToggleToDoMutation = useMutation({
    mutationFn: toggleTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleToggle = (todo: Todo) => {
    ToggleToDoMutation.mutate(todo);
  };
  return { handleToggle };
};

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleAddTodo = (todo: NewTodo) => {
    addTodoMutation.mutate(todo);
  };
  return { handleAddTodo };
};
