import classes from "./Risk_table_container.module.css";
import React, {Fragment} from "react";
import { table_header_values,} from "../constants/constans";
import {array_to_string} from "../func/func"
import Row from "./Row"
import BtPrevious from "../UI/bt_previous/BtPrevious";

const RiskTableContainer = (props) => {
    const risks = props.data.risks_array
    let updateLines = []
    let obj = props.data
    const next_step = () => {
        obj = {
            ...obj, sqlUpdate:{
                ...obj.sqlUpdate,update_array: updateLines, mapped_array: array_to_string(updateLines)
            }
        }
        console.log(obj)

        props.getScript(obj, "999")
        //props.Step_definition(3)
    }
    const prev_step = () => {
        props.Step_definition(1)
        props.getLayout(3)
    }


    const add_risk_update = (updateObject) => {
        updateLines[updateObject.ID] = updateObject
        //console.log(updateLines)
    }
    const remove_risk_update = (id) => {
        updateLines[id] = null
       // console.log(updateLines)
    }
    return (<Fragment>

        <table>
            <thead>
            <tr>
                <th>{table_header_values.table1}</th>
                <th>{table_header_values.table2}</th>
                <th>{table_header_values.table3}</th>
                <th>{table_header_values.table4}</th>
                <th>{table_header_values.table5}</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {risks.map((x) => {
                return (<tr key={x.ID}>
                    <Row key={x.ID} name={x.riziko} type={x.typRizika} pc={x.pc} vek_d={x.uvek} index={x.ID}
                         typPlneni={x.typplneni} add={add_risk_update} remove={remove_risk_update}/>
                </tr>)
            })}
            </tbody>
        </table>
        <div className={classes.buttCont}>
            <BtPrevious fnc={prev_step} txt={"zpět"} isRisks={true}/>
            <button className={classes.genButton} disabled={false} onClick={next_step}>Generovat update</button>
        </div>
    </Fragment>)
}

export default RiskTableContainer