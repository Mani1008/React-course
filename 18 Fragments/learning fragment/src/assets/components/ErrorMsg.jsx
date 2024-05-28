const ErrorMsg = ({items}) => {
    // let foodItems = ["Dal", "Green Vegetables", "Fruits", "Juices", "Salad"];

    return (
        <>
        {items.length === 0 && <h3>I'm still hungry.</h3> }
        </>
    )
}

export default ErrorMsg;

// 03:41:00