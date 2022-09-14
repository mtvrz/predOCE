import {Fragment, useState} from "react";
import ContainerBody from "./container_body/ContainerBody";
import Table from "./UI/table/Table";
import RiskTableContainer from "./Risk_table_container/RiskTableContainer";
import UpdateContainer from "./update_container/UpdateContainer";
import {
    default_start_layout, default_StepBack_layout, default_repeteStep_layout, default_dataObject
} from "./constants/constans";
import {get_final_v1} from "../components/func/func"

const Wiring = () => {
    const [step_definition, getStep_definition] = useState(1);
    const [layout, getLayout] = useState(default_start_layout)
    const [prev_step, getprev_step] = useState(1);
    const [dataObject, getDataObject] = useState(default_dataObject)

    const reset_data_object = () => {
        getDataObject(default_dataObject)
    }
    const get_object = (obj) => {
        getDataObject(obj)
    }
    const GetStep = (x) => {
        getStep_definition(x)
    }
    const GetPrev = (x) => {
        getprev_step(x)
    }
    const GetLayout = (x) => {
        /*
        1 === počáteční stav
        2 === první otázka
        3 === poslední otázka
        */
        x === 1 ? getLayout(default_start_layout) : x === 2 ? getLayout(default_repeteStep_layout) : x === 3 ? getLayout(default_StepBack_layout) : getLayout(undefined)

    }
    const get_script_final_v1 = (case_object, scenario) => {
        console.log("Object:", case_object)
        const scr = get_final_v1(case_object, scenario)
        getDataObject({
            ...case_object, sqlUpdate: {...case_object.sqlUpdate, final_update: scr}
        })
        navigator.clipboard.writeText(scr + "\n\n" + dataObject.sqlUpdate.trigger)
        getStep_definition(3)
    }
    return <Fragment>
        {step_definition === 1 ?
            <ContainerBody
                Step_definition={GetStep}
                Step_previous={GetPrev}
                layout={layout}
                data={dataObject}
                updateData={get_object}
                getScript={get_script_final_v1}
            /> : step_definition === 2 ? <Table name={dataObject.person.name + " " + dataObject.person.surname}>
                <RiskTableContainer
                    Step_definition={GetStep}
                    Step_previous={GetPrev}
                    getLayout={GetLayout}
                    updateData={get_object}
                    data={dataObject}
                    getScript={get_script_final_v1}
                />
            </Table> : <UpdateContainer
                Step_definition={GetStep}
                Step_previous={prev_step}
                getLayout={GetLayout}
                updateData={get_object}
                resetData={reset_data_object}
                data={dataObject}
            />}


    </Fragment>
}
export default Wiring;