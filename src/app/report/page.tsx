import { Todo } from "@/type/todoType";
import { getReportTodo } from "../todoAPI/todoAPI";

const Report = async () => {
  const response = await getReportTodo();
  const result: Todo[] = await response.json();

  const notYetTodo = result?.filter((item) => item.isDone === false).length;
  const doneTodo = result?.filter((item) => item.isDone === true).length;
  console.log(doneTodo, notYetTodo);
  return <div>{`해야할거 ${notYetTodo} 아직 안한거 ${doneTodo}`}</div>;
};

export default Report;
