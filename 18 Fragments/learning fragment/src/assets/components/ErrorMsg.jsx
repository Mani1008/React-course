const ErrorMsg = () => {
    let foodItems = ["Dal", "Green Vegetables", "Fruits", "Juices", "Salad"];

    return (
        <>
        {foodItems.length === 0 && <h3>I'm still hungry.</h3> }
        </>
    )
}

export default ErrorMsg;