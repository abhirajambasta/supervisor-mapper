import * as recordFields from './recordFields';
import * as designations from './designations';

let recordFieldsConstant = recordFields.DB_FIELDS;
let designationsConstants = designations.DESIGNATION;

const MONGODB_URI = `mongodb://localhost:27017/supervisor_mapping`;


export const DB_URL = process.env.MONGODB_URI || MONGODB_URI; // for locally serving data

export const CREDENTIALS = {
    "username": "admin",
    "password": "admin"
};

export const EDITLABEL = 'EDIT';

export const RECORDS_HEAD = ['SUPERVISOR_NAME', 'SUPERVISOR_ID', 'SUPERVISOR_DESIGNATION', 'ORACLE_ID', 'FULL_NAME', 'EMAIL_ADDRESS', 'TITLE_NAME', 'HOME_OFF', 'CURR_OFF'];


export const RECORDS_HEAD_DOWNLOAD = ['ORACLE_ID', 'FIRST_NAME', 'MIDDLE_NAME', 'LAST_NAME', 'HRMS_TEAM', 'ORGANIZATION', 'STARTDATE', 'TERMDATE',  'ORIGINAL_DATE_OF_HIRE', 'WORKING_HOURS', 'LAST_PROMOTION_DATE', 'TIME_SINCE_LAST_PROMOTION', 'STAFFING_PARTNER_ID', 'STAFFING_PARTNER', 'STAFFING_PARTNER_TITLE', 'SUPERVISOR_ID', 'SUPERVISOR', 'COMP_COMMUNICATOR_ID', 'COMP_COMMUNICATOR', 'GENDER', 'NATIONALITY', 'HOME_PHONE', 'EMAIL_ADDRESS', 'ALLOC_START_DATE', 'ALLOC_END_DATE'];

export const RECORDS_HEAD_DB = [recordFieldsConstant.SUPERVISOR, recordFieldsConstant.SUPERVISOR_ID, recordFieldsConstant.Supervisor_Designation, recordFieldsConstant.ORACLE_ID, recordFieldsConstant.FIRST_NAME, recordFieldsConstant.MIDDLE_NAME, recordFieldsConstant.LAST_NAME, recordFieldsConstant.EMAIL_ADDRESS];

export const RECORDS_HEAD_DB_EXCEL = [recordFieldsConstant.ORACLE_ID, recordFieldsConstant.FIRST_NAME, recordFieldsConstant.MIDDLE_NAME, recordFieldsConstant.LAST_NAME, recordFieldsConstant.HRMS_TEAM, recordFieldsConstant.STARTDATE, recordFieldsConstant.TERMDATE, recordFieldsConstant.ORIGINAL_DATE_OF_HIRE, recordFieldsConstant.WORKING_HOURS,  recordFieldsConstant.LAST_PROMOTION_DATE, recordFieldsConstant.STAFFING_PARTNER_ID, recordFieldsConstant.STAFFING_PARTNER,  recordFieldsConstant.STAFFING_PARTNER_TITLE, recordFieldsConstant.SUPERVISOR_ID, recordFieldsConstant.SUPERVISOR,  recordFieldsConstant.COMP_COMMUNICATOR_ID, recordFieldsConstant.COMP_COMMUNICATOR, recordFieldsConstant.GENDER, recordFieldsConstant.NATIONALITY, recordFieldsConstant.HOME_PHONE, recordFieldsConstant.EMAIL_ADDRESS, recordFieldsConstant.ALLOC_START_DATE, recordFieldsConstant.ALLOC_END_DATE];

export const EDITABLE_FIELDS = [recordFieldsConstant.SUPERVISOR, recordFieldsConstant.SUPERVISOR_ID, recordFieldsConstant.Supervisor_Designation];

export const UPDATABLE_FIELDS = [recordFieldsConstant.SUPERVISOR, recordFieldsConstant.SUPERVISOR_ID, recordFieldsConstant.Supervisor_Designation, recordFieldsConstant.TITLE_NAME, recordFieldsConstant.HOME_OFF, recordFieldsConstant.CURR_OFF];

export const MAP_DESIGNATION = {
    "Senior Director Technology": designationsConstants.SENIOR_DIRECTOR.label,
    "Director Technology": designationsConstants.DIRECTOR.label,
    "Senior Manager Technology": designationsConstants.SENIOR_MANAGER.label,
    "Manager Technology": designationsConstants.MANAGER.label,
    "Senior Associate Technology": designationsConstants.SENIOR_ASSOCIATE.label,
    "Senior Manager Program Management": designationsConstants.SENIOR_PROGRAM_MANAGER.label,
    "Manager Program Management": designationsConstants.PROGRAM_MANAGER.label
};

export const DOWNLOAD_FILE_NAME = 'Supervisor.xlsx';

export const FORM_ENCTYPE = 'multipart/form-data';

export const APP_LISTENING_PORT = process.env.PORT || 6363;