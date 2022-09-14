import classes from "./Error_poput.module.css"

const Popup = (props) => {


    return <div
        className={`${classes.errContainer} ${props.status === false
            ? classes.moveErr
            : ""}
        ${props.style === 1 ? classes.error : props.style === 2 ? classes.warn : classes.info}`}><p><b>{props.txt}</b></p>
    </div>
}

export default Popup