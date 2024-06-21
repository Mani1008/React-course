import styles from "./Item.module.css";
console.log(styles);
const Item = ({ foodItem, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event); // 
  //   console.log(`Adding ${foodItem} to cart`);
  // };

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
