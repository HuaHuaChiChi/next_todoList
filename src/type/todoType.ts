export type Todo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type TodoData = Todo[];

export type NewTodo = Omit<Todo, "id">;
