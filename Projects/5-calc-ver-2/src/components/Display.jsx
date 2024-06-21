import styles from "./Display.module.css"
const Display =({displayValue}) => {

    return <input className={styles.display} type="text" value={displayValue} readOnly/>
}       // readOnly is used to make the display value not editable.

export default Display;