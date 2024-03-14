import { NewTodo, Todo } from "@/type/todoType";

export const getTodos = async (): Promise<{ todos: Todo[] }> => {
  try {
    const response = await fetch(`/api/todos`, {
      method: "GET",
    });
    console.log(response);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
};

export const toggleTodo = async (todo: Todo): Promise<void> => {
  const { id, isDone } = todo;
  try {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isDone: isDone,
      }),
    });
  } catch (error) {
    throw error;
  }
};

export const addTodo = async (todo: NewTodo): Promise<void> => {
  const { title, contents, isDone } = todo;
  try {
    await fetch(`/api/todos`, {
      method: "POST",
      body: JSON.stringify({
        title,
        contents,
        isDone,
      }),
    });
  } catch (error) {
    throw error;
  }
};
