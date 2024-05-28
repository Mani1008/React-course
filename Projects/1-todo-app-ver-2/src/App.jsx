import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
// import TodoItem1 from "./Components/TodoItem1";
// import TodoItem2 from "./Components/TodoItem2";    You can delete these 2 after creating TodoItem.jsx, bcoz TodoItem is handling both data
import TodoItem from "./Components/TodoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo></AddTodo>
        <TodoItem todoDate='28/05/2024' todoName="Buy Milk1"></TodoItem>
        <TodoItem todoDate='298/05/2024' todoName="Buy Milk12s"></TodoItem>
        <TodoItem todoDate='24/05/2024' todoName="Go to College"></TodoItem>
      </div>
    </center>
  );
}

export default App;
