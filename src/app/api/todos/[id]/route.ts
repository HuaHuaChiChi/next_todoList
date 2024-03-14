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
  const { isDone } = await request.json();
  const { id } = params;

  const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ isDone: !isDone }),
  });
  if (response.ok) {
    return new Response("Todo update successfully", { status: 200 });
  } else {
    return new Response("Failed to delete todo", { status: response.status });
  }
}
