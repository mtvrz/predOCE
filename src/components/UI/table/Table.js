import classes from "./Table.module.css"
import {Fragment} from "react";
import Avatar from "../../Images/avatar.png"
const Table = (props) => {

    return (<Fragment>
        <div className={classes.toolBar}>
            <h6>{props.name}</h6>
            <img src={Avatar}/>

        </div>
        <div className={`${classes.contTableBody} ${props.upDate_page === true? classes.flextable: ""}`}>
            {props.children}
        </div>
    </Fragment>)

}

export default Table