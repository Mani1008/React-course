import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./assets/components/FoodItems";
import ErrorMsg from "./assets/components/ErrorMsg";

function App() {

  // let foodItems = []
  let foodItems = ["Dal", "Kiwi", "Grapes", "Green Vegetables", "Fruits", "Juices", "Salad"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMsg items = {foodItems}></ErrorMsg>
      <FoodItems items = {foodItems}></FoodItems>
    </>
  );
}

export default App;
