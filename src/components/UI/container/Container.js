import classes from "./Container.module.css";
import {Fragment, useState} from "react";
import ErrorPopup from "../error_popup/Popup";
import {popUp_styles_enum} from "../../constants/constans"


const Container = (props) => {
    let isSmall = props.isSmall
    const [isVisible, getIsVisible] = useState(false)
    const timeOut = () => {
        getIsVisible(false)
    }
    const click_handler = ()=>{
        navigator.clipboard.writeText("SELECT * FROM OCE_INTEGRATION ORDER BY ID desc;")
        getIsVisible(true)
        setTimeout(timeOut,1000)
    }
    return (
        <Fragment>
            <div className={classes.toolBar}>
                <h6 onClick={click_handler} className={props.isForSee === false? classes.hidden: ""}>SELECT</h6>
            </div>
            <div className={`${classes.ContainerBody} ${isSmall === true ? classes.startScreen : ""}`}>{props.children}</div>;
            <ErrorPopup style={popUp_styles_enum.information} status={isVisible} txt={"SELECT zkopírován"}/>
        </Fragment>
    )
};

export default Container;
