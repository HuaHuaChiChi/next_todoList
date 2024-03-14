"use client";

import { useAddTodoMutation } from "@/app/util/todosHook";
import { NewTodo } from "@/type/todoType";
import { useState } from "react";

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const { handleAddTodo } = useAddTodoMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: NewTodo = {
      title,
      contents,
      isDone: false,
    };
    handleAddTodo(newTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="내용"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button>제출</button>
      </form>
    </div>
  );
};

export default TodoInput;
