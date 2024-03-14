import React from "react";
import { Todo } from "@/type/todoType";
import { getAboutTodos } from "../todoAPI/todoAPI";
import Link from "next/link";

const TodoSSR = async () => {
  const response = await getAboutTodos();
  const result: Todo[] = await response.json();

  // console.log(result);

  return (
    <div>
      <Link href={"/report"}>통계보기</Link>
      {result.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.contents}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoSSR;
