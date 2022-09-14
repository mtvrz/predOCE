import classes from "./Bt_previous.module.css";
import Ico from "../../Images/arrow_back.png"
const BtPrevious = (props) => {

    const bt_function = () => {
        props.fnc()
    }

    return <button onClick={bt_function} className={`${classes.updatePage_Button} ${classes.bck_bt} ${props.isRisks ===true? classes.riskPage:""}`}><span className={classes.ico}><img alt={"arrow"} src={Ico}/></span>{props.txt}</button>
}

export default BtPrevious