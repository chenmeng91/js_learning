import FilterButton from "./components/FilterButton.jsx";
import Form from "./components/Form.jsx";
import Todo from "./components/Todo.jsx";

export default function App({ tasks }) {
  const taskList = tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));

  return (
    <main className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton name="全部" isPressed />
        <FilterButton name="进行中" isPressed={false} />
        <FilterButton name="已完成" isPressed={false} />
      </div>
      <h2 id="list-heading">剩余 3 个任务</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </main>
  );
}
