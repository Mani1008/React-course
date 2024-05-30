import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy1 Milk",
      dueDate: "28/05/2024",
    },
    {
      name: "Go to College",
      dueDate: "28/05/2024",
    },
    {
      name: "Go to College2",
      dueDate: "28/05/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
