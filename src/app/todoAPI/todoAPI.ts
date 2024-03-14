import { Todo } from "@/type/todoType";

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
