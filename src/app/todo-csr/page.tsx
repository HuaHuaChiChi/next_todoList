import TodoInput from "./todo-csrComponents/TodoInput";
import Header from "./todo-csrComponents/Header";
import TodoList from "./todo-csrComponents/TodoList";

const TodoCSR = () => {
  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </div>
  );
};

export default TodoCSR;
