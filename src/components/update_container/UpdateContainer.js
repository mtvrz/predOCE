import classes from "./Update_container.module.css"
import Table from "../UI/table/Table"
import BtPrevious from "../UI/bt_previous/BtPrevious";

const UpdateContainer = (props) => {
    const Exit_to_start = () => {
        props.Step_definition(1)
        props.getLayout(1)
        props.resetData()
    }
    const Step_back = () => {

        if (props.Step_previous === 1) {
            props.getLayout(3)
        }
        props.Step_definition(props.Step_previous)
    }
    return <Table upDate_page={true} name={props.data.person.name + " " + props.data.person.surname}>
        <textarea className={classes.textarea_input_update_page} disabled={true} value={props.data.sqlUpdate.final_update + "\n\n" + props.data.sqlUpdate.trigger}/>
        <div className={classes.buttCont}>
            <button className={`${classes.updatePage_Button} ${classes.end_bt}`} onClick={Exit_to_start}>Konec</button>
            <BtPrevious fnc={Step_back} txt={"zpět"}/>
        </div>
    </Table>
}
export default UpdateContainer