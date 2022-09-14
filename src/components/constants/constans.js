export const preevaluation_scenarios_enum = [{id: 1, title: "preevalOK", value: "Předocenění - OK"}, {
    id: 999, title: "preevalOKw", value: "Předocenění - OK s výlukou"
}, {id: 2, title: "preevalNOK2", value: "Předocenění - nOK (2)"}, {
    id: 8, title: "preevalNOK8", value: "Předocenění - nOK (8)"
},];

export const preevaluation_change_type_enum = [
    {id: 1, title: "vyluka_ano", value: "Výluka - ano"},
    {id: 2, title: "vyluka_castecna", value: "Výluka - částečná"},
    {id: 3, title: "prirazka", value: "Přirážka"},
    {id: 4, title: "upr_vek", value: "Upravený věk"},
    {id: 5, title: "upr_pc", value: "Upravená pojistná částka"},
]
export const popUp_styles_enum = {
    error: 1,
    warning: 2,
    information: 3,
}
export const table_header_values = {
    table1: "RIZIKO", table2: "TYP RIZIKA", table3: "POJISTNÁ ČÁSTKA", table4: "do VĚKU", table5: "AKCE",
}
export const default_start_layout = {
    step_definition: 0, question_layout: {
        first_question_field: false, second_question_field: false, third_question_field: false,
    }
}
export const default_repeteStep_layout = {
    step_definition: 1, question_layout: {
        first_question_field: true, second_question_field: false, third_question_field: false,
    }
}
export const default_StepBack_layout = {
    step_definition: 3, question_layout: {
        first_question_field: false, second_question_field: false, third_question_field: true,
    }
}
export const placeholder_tooltip_row_enum = {
    prirazka: "50 - 500 ",
    u_vek: "20 - 80",
    u_pc: " 10 000 - ...",
}


export const default_dataObject = {
    inputData: {
        request_data: "",
        request_date: "",
        scenario: "null",
    },
    date: {
        request_date: null,
        request_date_One: null
    },
    person: {
        name: null,
        surname: null,
    },
    sqlUpdate: {
        update_array: null,
        mapped_array: null,
        final_update: undefined,
        trigger: "Update QRTZ_TRIGGERS\n" +
            "\tset NEXT_FIRE_TIME = (CAST(Datediff(S, '1970-01-01', GETUTCDATE()) AS BIGINT) + 30) * 1\n" +
            "\twhere TRIGGER_NAME = 'oceIntegrationJobTriggerBean';\n"
    },
    risks_array: null,
    rowID: null,
}
