import styles from "./Item.module.css";
console.log(styles);
const Item = ({ foodItem }) => {
    const handleBuyButtonClicked = () => {
        console.log(`Adding ${foodItem} to cart`)
    }

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`}
      onClick={handleBuyButtonClicked}>Add to Cart</button>
    </li>
  );
};

export default Item;
