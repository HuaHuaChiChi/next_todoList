import TodoCard from "./TodoCard";

const TodoList = ({ isDone }: { isDone: boolean }) => {
  return (
    <div>
      <p>{isDone ? "완료" : "하는중"}</p>
      <TodoCard isDone={isDone} />
    </div>
  );
};

export default TodoList;
