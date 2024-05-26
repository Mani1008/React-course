const FoodItems = () => {

    let foodItems = ["Dal", "Green Vegetables", "Fruits", "Juices", "Salad"];

    return (
        <ul className="list-group">
            {foodItems.map((item) => (
                <li key={item} className="list-group-item">{item}</li>
            ))}
        </ul>
    );
}

export default FoodItems;