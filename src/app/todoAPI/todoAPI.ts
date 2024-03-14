import { NewTodo, Todo } from "@/type/todoType";

export const getTodos = async (): Promise<{ todos: Todo[] }> => {
  try {
    const response = await fetch(`/api/todos`, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getAboutTodos = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos`, {
      method: "GET",
      cache: "no-cache",
    });
    return response;
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

// 통계

export const getReportTodo = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_DB_URL}/todos`, {
      method: "GET",
      next: { revalidate: 10 },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
// :Promise<Todo[]>
