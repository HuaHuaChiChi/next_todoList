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

export async function POST(request: Request) {
  // body에서 값을 뽑아오기
  const { title, contents } = await request.json();

  const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ title, contents, isDone: false }),
  });

  const todo = await response.json();

  return Response.json({
    todo,
  });
}

// export async function DELETE(request: Request) {
//   const { id } = await request.json();

//   const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos/${id}`, {
//     method: "DELETE",
//   });
//   if (response.ok) {
//     return new Response("Todo deleted successfully", { status: 200 });
//   } else {
//     return new Response("Failed to delete todo", { status: response.status });
//   }
// }
