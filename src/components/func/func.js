export const request_to_prettier = (request) => {
    request = request.replaceAll('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '');
    request = request.replaceAll(' ', '');
    //console.log(1, request)
    return request
};

export const request_to_object = (data) => {
    //console.log(data)
    let i = true
    let x = 0;
    let obj = []
    let parser = new DOMParser();
    let xmldoc = parser.parseFromString(data, 'text/xml');
    const name = xmldoc.getElementsByTagName("Jmeno")[0].childNodes[0].nodeValue;
    const surname = ' ' + xmldoc.getElementsByTagName('Prijmeni')[0].childNodes[0].nodeValue;
    const rowID = xmldoc.getElementsByTagName('ROWID')[0].childNodes[0].nodeValue;

    while (i === true) {
        try {
            obj[x] = {
                ID: x + 1,
                riziko: xmldoc.getElementsByTagName('VerzeRizika')[x].childNodes[0].nodeValue,
                typRizika: xmldoc.getElementsByTagName('TypRizika')[x].childNodes[0].nodeValue,
                typplneni: xmldoc.getElementsByTagName('TypPlneni')[x].childNodes[0].nodeValue,
                pc: xmldoc.getElementsByTagName('PC')[x].childNodes[0].nodeValue,
                uvek: xmldoc.getElementsByTagName('O_VEK')[x].childNodes[0].nodeValue,
                prirazka: 0,
            };
            x++;
        } catch (error) {
            console.warn('Risks_Loaded');
            i = false;
        }
    }
    const object_to_export = {
        jmeno: name,
        prijmeni: surname,
        row: rowID,
        risks: obj,
    }
    //console.log(rowID, name, surname)
    //console.log(object_to_export)
    return object_to_export
};

export const request_date_process = (req_date) => {
    let request_date_plus_oneMinute, minutes, hours
    req_date = req_date.replace(' ', 'T');
    minutes = parseInt(req_date[14] + req_date[15]);
    hours = parseInt(req_date[11] + req_date[12]);
    request_date_plus_oneMinute = req_date

    minutes++;
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    if (hours === 24) {
        hours = 0;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    request_date_plus_oneMinute = request_date_plus_oneMinute.substr(0, 11) + hours + ':' + minutes + request_date_plus_oneMinute.substr(16);
    let obj = {
        date_basic: req_date,
        date_plus: request_date_plus_oneMinute
    }
    //console.log(obj)
    return obj
};
export const print_subUpdate = (risk, scenario) => {
    let tepmObject
    // console.warn(".log", risk, scenario)
    tepmObject = {
        ID: risk.id,
        SubUpdateLink: null
    }
    switch (scenario) {
        case "1": {
            //Vyluka
            return {
                ...tepmObject,
                SubUpdateLink: `<Riziko><TypRizika>${risk.typRizika}</TypRizika><VerzeRizika>${risk.verzeRizika}</VerzeRizika><TypPlneni>${risk.typPlneni}</TypPlneni><Vyluka>1</Vyluka><VylukaDiagnozy/></Riziko>`
            }
        }
        case "2": {
            //Vyluka částečná
            return {
                ...tepmObject,
                SubUpdateLink: `<Riziko><TypRizika>${risk.typRizika}</TypRizika><VerzeRizika>${risk.verzeRizika}</VerzeRizika><TypPlneni>${risk.typPlneni}</TypPlneni><Vyluka>2</Vyluka><VylukaDiagnozy><VylukaDiagnoza><Nazev>úrazy pánevních kostí</Nazev></VylukaDiagnoza></VylukaDiagnozy></Riziko>`
            }
        }
        case "3": {
            //Přirážka
            return {
                ...tepmObject,
                SubUpdateLink: `<Riziko><TypRizika>${risk.typRizika}</TypRizika><VerzeRizika>${risk.verzeRizika}</VerzeRizika><TypPlneni>${risk.typPlneni}</TypPlneni><VylukaDiagnozy/><Prirazka>${risk.actionField}</Prirazka></Riziko>`
            }
        }
        case "4": {
            //Upravený věk
            return {
                ...tepmObject,
                SubUpdateLink: `<Riziko><TypRizika>${risk.typRizika}</TypRizika><VerzeRizika>${risk.verzeRizika}</VerzeRizika><TypPlneni>${risk.typPlneni}</TypPlneni><VylukaDiagnozy/><O_VEK_UPR>${risk.actionField}</O_VEK_UPR></Riziko>`
            }
        }
        case "5": {
            //Upravená pojistná částka
            return {
                ...tepmObject,
                SubUpdateLink: `<Riziko><TypRizika>${risk.typRizika}</TypRizika><VerzeRizika>${risk.verzeRizika}</VerzeRizika><TypPlneni>${risk.typPlneni}</TypPlneni><VylukaDiagnozy/><PC_UPR>${risk.actionField}</PC_UPR></Riziko>`
            }
        }
        default: {console.error("Something's wrong")
            break}

    }
};

export const get_final_v1 = (case_object, scenario) => {
    let arr_update = [`UPDATE OCE_INTEGRATION SET REQUEST_STATUS='SENT', RESPONSE_DATA='`, ``, `', RESPONSE_STATUS='RECEIVED', RESPONSE_DATE='${case_object.date.request_date_One}' WHERE id=${case_object.rowID};`]
    switch (scenario) {
        //OK
        case "1": {
            arr_update[1] = `<row><ROWID>${case_object.rowID}</ROWID><Rizika/><Ostatni><StanoviskoCS>1</StanoviskoCS><ZaverecneRozhodnuti> MR - ok</ZaverecneRozhodnuti><DatPrevzetiLISA>${case_object.date.request_date}</DatPrevzetiLISA></Ostatni></row>`
            return arr_update[0] + arr_update[1] + arr_update[2]
        }
        //OKv
        case "999": {
            arr_update[1] = `<row><ROWID>${case_object.rowID}</ROWID><Rizika>${case_object.sqlUpdate.mapped_array}</Rizika><Ostatni><StanoviskoCS>999</StanoviskoCS><ZaverecneRozhodnuti>Z5P přirážka 150%, ID1 vyloučeno, DDZ0 snížení doby na 20 let, TNP1 výluka na úrazy pánevních kostí</ZaverecneRozhodnuti><DatPrevzetiLISA>${case_object.date.request_date}</DatPrevzetiLISA></Ostatni></row>`
            return arr_update[0] + arr_update[1] + arr_update[2]
        }
        //NOK2 + NOK8
        default: {
            arr_update[1] = `<row><ROWID>${case_object.rowID}</ROWID><Rizika/><Ostatni><StanoviskoCS>${scenario === "2" ? "2" : "8"}</StanoviskoCS><ZaverecneRozhodnuti>MR - odmítnuto</ZaverecneRozhodnuti><DatPrevzetiLISA>${case_object.date.request_date}</DatPrevzetiLISA></Ostatni></row>`
            return arr_update[0] + arr_update[1] + arr_update[2]
        }


    }
}

export const array_to_string = (Arr) => {
    let merged = ""
    Arr.map(x => {
        if (x !== null) {
            merged += x.SubUpdateLink
        }
    })
    return merged
}