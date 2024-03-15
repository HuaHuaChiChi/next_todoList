export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // const { id } = await request.json();
  const { id } = params;
  console.log(id);

  const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return new Response("Todo deleted successfully", { status: 200 });
  } else {
    return new Response("Failed to delete todo", { status: response.status });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { isDone } = await request.json();

  console.log("백엔드 실행");

  const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone: !isDone }),
  });
  const result = await response.json();
  console.log(result);

  return new Response(JSON.stringify(result));
}
