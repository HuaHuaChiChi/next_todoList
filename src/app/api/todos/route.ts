import { Todo } from "@/type/todoType";

export async function GET(request: Request) {
  const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos`);
  const todos: Todo[] = await response.json();

  if (!todos) {
    return new Response("Todo is not found", {
      status: 404,
    });
  }

  return Response.json({
    todos: [...todos],
  });
}
