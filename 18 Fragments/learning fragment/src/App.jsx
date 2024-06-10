import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./assets/components/FoodItems";
import ErrorMsg from "./assets/components/ErrorMsg";
import Container from "./assets/components/Container";
import FoodInput from "./assets/components/FoodInput";

function App() {
  let foodItems = [
    "Dal",
    "Kiwi",
    "Grapes",
    "Green Vegetables",
    "Fruits",
    "Juices",
    "Salad",
  ];
  let textToShow = "Food Item Entered by the user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Here are the list of food items that are beneficial for health and well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
