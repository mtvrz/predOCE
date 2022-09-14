import classes from "./Row.module.css"
import React, {Fragment, useState} from "react";
import {preevaluation_change_type_enum, placeholder_tooltip_row_enum} from "../constants/constans";
import {print_subUpdate} from "../func/func"

const Row = (props) => {
    let isUsed = false
    const [isInUse, getIsInUse] = useState(false)
    const [caseScenario, getCase] = useState(0)
    const [fieldValue, getfieldValue] = useState("")
    const default_pojistna_castka = Number(props.pc) + 50000;
    const default_pojisteni_do_veku = Number(props.vek_d) - 5;
    const default_prirazka = 100;
    const switch_scenario_case = (event) => {
        getCase(event.target.value)
        //getfieldValue(caseScenario == 0 || caseScenario == 1 || caseScenario == 2 ? "" : caseScenario == 3 ? default_prirazka : caseScenario == 4 ? default_pojisteni_do_veku : caseScenario == 5 ? default_pojistna_castka : "")
        event.target.value === "3" || event.target.value === "4" || event.target.value === "5" ? getIsInUse(true) : getIsInUse(false)
        //  console.log(event.target.value)

        let act = event.target.value === "3" ? default_prirazka : event.target.value === "4" ? default_pojisteni_do_veku : default_pojistna_castka
        event.target.value !== "0"
            ? props.add(print_subUpdate({
                id: props.index,
                typRizika: props.type,
                verzeRizika: props.name,
                typPlneni: props.typPlneni,
                actionField: act
            }, event.target.value))
            : props.remove(props.index)

        //console.log(default_pojistna_castka, default_prirazka, default_pojisteni_do_veku)
    }

    const validate_fields = (event) => {
        let num = Number(event.target.value)
        getfieldValue(num)
        switch (caseScenario) {
            case "3": {
                if (num >= 50 && num <= 500){
                    //console.log(num)
                    props.remove(props.index)
                    props.add(print_subUpdate({
                        id: props.index,
                        typRizika: props.type,
                        verzeRizika: props.name,
                        typPlneni: props.typPlneni,
                        actionField: num
                    }, "3"))
                }
                    break
            }
            case "4": {
                props.remove(props.index)
                props.add(print_subUpdate({
                    id: props.index,
                    typRizika: props.type,
                    verzeRizika: props.name,
                    typPlneni: props.typPlneni,
                    actionField: num
                }, "4"))
                break
            }
            case "5": {
                props.remove(props.index)
                props.add(print_subUpdate({
                    id: props.index,
                    typRizika: props.type,
                    verzeRizika: props.name,
                    typPlneni: props.typPlneni,
                    actionField: num
                }, "5"))
                break
            }
        }

    }
    return <Fragment>
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td>{props.pc}</td>
        <td>{props.vek_d}</td>
        <td><select defaultValue={caseScenario} onChange={switch_scenario_case}>
            <option key={0} value={0}></option>
            {preevaluation_change_type_enum.map((x) => {
                return (<option key={x.id} value={x.id}>{x.value}</option>);
            })}</select></td>
        <td><input className={`${classes.txtbox}`} onChange={validate_fields} type={"text"}
                   disabled={isInUse ? false : true}
                   value={fieldValue}
        placeholder={caseScenario == 0 || caseScenario == 1 || caseScenario == 2 ? "" : caseScenario == 3 ? placeholder_tooltip_row_enum.prirazka : caseScenario == 4 ? placeholder_tooltip_row_enum.u_vek : caseScenario == 5 ? placeholder_tooltip_row_enum.u_pc : ""}/>
        </td>
    </Fragment>
}
export default Row;