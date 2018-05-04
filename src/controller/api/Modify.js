import * as GLOBAL_CONSTANTS from '../../config';

export default class Modify {
    constructor(props) {
        this.props = props;
    }

    modifyList() {
        let _self = this;
        _self.props.req.db.collection('csv').find().sort({ $natural: -1 }).limit(1).toArray((err, results) => {
            let employeeLisT,
                SupervisorMap = {};
            if (!results || !results[0]) {
                _self.props.res.redirect(GLOBAL_CONSTANTS.Routes.HOME);
            } else {
                employeeLisT = results[0].completeRecordsObject;
                _self.arraySorter(employeeLisT);
                for (let employee of employeeLisT) {
                    let generatedSupervisorMap = _self.generateSupervisorMap(employee[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID], employeeLisT);
                    if (Object.keys(generatedSupervisorMap).length) {
                        let supervisorId = employee[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID];
                        SupervisorMap[supervisorId] = {
                            "name": employee[GLOBAL_CONSTANTS.DB_FIELDS.LAST_NAME] + ', ' + employee[GLOBAL_CONSTANTS.DB_FIELDS.FIRST_NAME] + ' (' + supervisorId + ')',
                            "nameDisplay": employee[GLOBAL_CONSTANTS.DB_FIELDS.FIRST_NAME] + ((employee[GLOBAL_CONSTANTS.DB_FIELDS.MIDDLE_NAME]) ? ' ' + employee[GLOBAL_CONSTANTS.DB_FIELDS.MIDDLE_NAME] + ' ' : ' ') + employee[GLOBAL_CONSTANTS.DB_FIELDS.LAST_NAME],
                            "designation": employee[GLOBAL_CONSTANTS.DB_FIELDS.TITLE_NAME],
                            "superviseeCount": Object.keys(generatedSupervisorMap).length,
                            "startDate": employee[GLOBAL_CONSTANTS.DB_FIELDS.STARTDATE],
                            "supervisee": generatedSupervisorMap
                        };
                    }
                }
                _self.render(SupervisorMap);
            }
        })
    }
    render(SupervisorMap) {
        this.props.res.render('modify', {
            notShowLogout: false,
            SupervisorMap: SupervisorMap,
            mapDesignation: GLOBAL_CONSTANTS.MAP_DESIGNATION,
            label: GLOBAL_CONSTANTS.PAGE_LABELS.Modify,
            routes: GLOBAL_CONSTANTS.Routes,
            headerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Header,
            currentYear: new Date().getFullYear(),
            footerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Footer
        });
    }
    arraySorter(arr) {
        arr.sort((a, b) => {
            var keyA = Number(a[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID]),
                keyB = Number(b[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID]);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
    }
    generateSupervisorMap(oracleID, employeeLisT) {
        let obj = {};
        for (let i = employeeLisT.length - 1; i >= 0; i--) {
            let employee = employeeLisT[i];
            if (employee[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID]) {
                if (employee[GLOBAL_CONSTANTS.DB_FIELDS.SUPERVISOR_ID] == oracleID) {
                    let superviseeId = employee[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID];
                    obj[superviseeId] = {
                        "name": employee[GLOBAL_CONSTANTS.DB_FIELDS.FIRST_NAME] + ((employee[GLOBAL_CONSTANTS.DB_FIELDS.MIDDLE_NAME]) ? ' ' + employee[GLOBAL_CONSTANTS.DB_FIELDS.MIDDLE_NAME] + ' ' : ' ') + employee[GLOBAL_CONSTANTS.DB_FIELDS.LAST_NAME],
                        "oracleId": employee[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID],
                        "designation": employee[GLOBAL_CONSTANTS.DB_FIELDS.TITLE_NAME],
                        "supervisorDesignation": employee[GLOBAL_CONSTANTS.DB_FIELDS.Supervisor_Designation]
                    };
                }
            }
        }
        return obj;
    }

    updateNewObject() {
        var _self = this,
            supervisorMap = _self.props.req.body,
            supervisorMapArray = [],
            updatedData = [];
        _self.props.req.db.collection('csv').find().sort({ $natural: -1 }).limit(1).toArray((err, results) => {
            for (let k in supervisorMap) {
                let  supervisorId  =  k,
                    supervisorName  =  supervisorMap[k].name,
                    supervisorDesignation = supervisorMap[k].designation,
                    supervisorSupervisee = supervisorMap[k].supervisee;
                for (let key in supervisorSupervisee) {
                    let  obj = {};
                    if (supervisorSupervisee[key].new) {
                        obj[supervisorSupervisee[key].oracleId]  =   {
                            supervisorId: supervisorId,
                            supervisorName: supervisorName,
                            supervisorDesignation: supervisorDesignation
                        }
                        obj["oracleId"] = supervisorSupervisee[key].oracleId;
                        supervisorMapArray.push(obj);
                    }
                }
            }
            for (let index in supervisorMapArray) {
                let changableRecords,
                    records, updatedEmployee;

                _self.arraySorter(results[0].completeRecordsObject);
                records = results[0].completeRecordsObject;
                changableRecords = Object.assign([], results[0].completeRecordsObject);
                updatedEmployee = filter(changableRecords, records, supervisorMapArray[index]);
                updatedData.push(updatedEmployee);
            }

            function filter(arr, records, supervisorMapUpdated) {
                let mid = Math.floor(arr.length / 2),
                    oracleIdMid,
                    oracleIdObj = supervisorMapUpdated.oracleId;
                oracleIdMid = arr[mid][GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID];
                if (oracleIdMid == oracleIdObj) {
                    arr[mid][GLOBAL_CONSTANTS.DB_FIELDS.SUPERVISOR_ID] = supervisorMapUpdated[oracleIdObj].supervisorId;
                    arr[mid][GLOBAL_CONSTANTS.DB_FIELDS.SUPERVISOR] = supervisorMapUpdated[oracleIdObj].supervisorName;
                    arr[mid][GLOBAL_CONSTANTS.DB_FIELDS.SUPERVISOR_DESIGNATION] = supervisorMapUpdated[oracleIdObj].supervisorDesignation;
                    return arr[mid];
                } else if ((oracleIdMid < oracleIdObj) && arr.length > 1) {
                    return filter(arr.splice(mid, arr.length), records, supervisorMapUpdated);
                } else if ((oracleIdMid > oracleIdObj) && arr.length > 1) {
                    return filter(arr.splice(0, mid), records, supervisorMapUpdated);
                }

            }

            for (let key of updatedData) {
                if (Object.getOwnPropertyNames(key).length) {
                    let completeRecordsObject = results[0].completeRecordsObject;
                    completeRecordsObject.forEach(function(obj, index) {
                        if (obj[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID] == key[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID]) {
                            completeRecordsObject[index] = key;
                        }
                    })
                }
            }
            _self.props.req.db.collection('csv').save({
                "completeRecordsObject": results[0].completeRecordsObject
            }, (err, result) => {
                if (err) return console.log(err)
                console.log('saved to database');
                _self.props.res.send({ redirect: GLOBAL_CONSTANTS.Routes.DIFFERENCE });
            });
        });
    }


}