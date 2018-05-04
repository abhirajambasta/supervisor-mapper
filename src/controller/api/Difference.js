import path from 'path';
import xlsx from 'xlsx';
import * as GLOBAL_CONSTANTS from '../../config';

let excelData;

export default class Landing {
    constructor(props) {
        this.props = props;
    }

    diffChecker(recordsObjectArray) {
        let _self = this;
        _self.props.req.db.collection('csv').find().sort({ $natural: -1 }).limit(2).toArray((err, results) => {
            let difference, newObj, oldObj, minLength, dataToUpload;
            difference = [];

            if (!results || !results[1]) {
                _self.props.res.redirect(GLOBAL_CONSTANTS.Routes.HOME);
            } else {
                oldObj = recordsObjectArray ? results[0].completeRecordsObject : results[1].completeRecordsObject;
                newObj = recordsObjectArray || results[0].completeRecordsObject;
                minLength = (newObj.length < oldObj.length) ? newObj.length : oldObj.length;

                function parsed(dataFromServer) {
                    for (let obj of dataFromServer) {
                        if (JSON.parse(obj)) {
                            obj = JSON.parse(obj);
                        }
                    }
                    return dataFromServer;
                }
                _self.arraySorter(newObj);
                _self.arraySorter(oldObj);

                for (let i = 0; i < minLength; i++) {
                    let arr = Object.assign([], oldObj),
                        diffObj;
                    diffObj = _self.filter(arr, newObj[i]);
                    if (diffObj) difference.push(diffObj);
                }
                _self.render(difference, newObj);
            }
        })
    }

    render(difference, completeRecordsObject) {
        this.props.res.render('difference', {
            records: (difference[0]) ? difference : 0,
            recordHeads: GLOBAL_CONSTANTS.RECORDS_HEAD,
            recordData: GLOBAL_CONSTANTS.RECORDS_HEAD_DB,
            editLabel: GLOBAL_CONSTANTS.EDITLABEL,
            editAbleItem: GLOBAL_CONSTANTS.EDITABLE_FIELDS,
            isAdmin: true,
            newDataToUpload: completeRecordsObject,
            label: GLOBAL_CONSTANTS.PAGE_LABELS.Difference,
            routes: GLOBAL_CONSTANTS.Routes,
            headerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Header,
            currentYear: new Date().getFullYear(),
            footerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Footer,
            enctypeValue: GLOBAL_CONSTANTS.FORM_ENCTYPE,
            dbField: GLOBAL_CONSTANTS.DB_FIELDS,
            notShowHome: true
        });
    }

    arraySorter(arr) {
        arr.sort(function(a, b) {
            var keyA = a[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID],
                keyB = b[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID];
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
    }

    filter(arr, obj) {
        let mid = Math.floor(arr.length / 2),
            oracleIdMid = arr[mid][GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID],
            oracleIdObj = obj[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID];
        if (oracleIdMid == oracleIdObj) {
            if (this.compareObj(arr[mid], obj)) return obj;
        } else if ((oracleIdMid < oracleIdObj) && arr.length > 1) {
            return this.filter(arr.splice(mid, arr.length), obj);
        } else if ((oracleIdMid > oracleIdObj) && arr.length > 1) {
            return this.filter(arr.splice(0, mid), obj);
        }
    }

    compareObj(objOld, objNew) {
        let changed = false,
            editablefields = GLOBAL_CONSTANTS.EDITABLE_FIELDS;
        for (let key in objOld) {
            if (editablefields.includes(key) && objOld[key] != objNew[key]) {
                var arr = [];
                arr.push(objOld[key]);
                arr.push(objNew[key]);
                objNew[key] = arr;
                changed = true;
            }
        }
        return changed;
    }

    uploadData() {
        let _self = this,
            recordsObject,
            recordsArray,
            supervisorDesigntion,
            recordsObjectArray = [],
            resultingRecordsObjectArray = [],
            wb = xlsx.readFile(_self.props.req.file.path);
        excelData = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: GLOBAL_CONSTANTS.RECORDS_HEAD_DB_EXCEL, blankrows: true, defval: '' }); // excel to json

        recordsArray = excelData.slice(0);

        resultingRecordsObjectArray = recordsArray.filter((obj) => {
            return obj[GLOBAL_CONSTANTS.DB_FIELDS.HRMS_TEAM] == 'Experiences: SCG-Front End Development';
        });
        resultingRecordsObjectArray.forEach((arrayElement) => {
            let obj = resultingRecordsObjectArray.find(function(obj) { return obj[GLOBAL_CONSTANTS.DB_FIELDS.ORACLE_ID] == arrayElement[GLOBAL_CONSTANTS.DB_FIELDS.SUPERVISOR_ID]; });
            if (obj) {
                arrayElement[GLOBAL_CONSTANTS.DB_FIELDS.SUPERVISOR_DESIGNATION] = obj[GLOBAL_CONSTANTS.DB_FIELDS.TITLE_NAME];
            }
        }, this);
        _self.props.req.db.collection('csv').save({
            "completeRecordsObject": resultingRecordsObjectArray
        }, (err, result) => {
            if (err) console.log(err)
            console.log('saved to database');
        });
        _self.diffChecker(resultingRecordsObjectArray);
    }
}