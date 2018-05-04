import * as GLOBAL_CONSTANTS from '../../../../config/constants';


module.exports = function (allTdText, _self){
    let currentTR = $(_self).parents('tr'),
        newCurrentRecord = Object.assign({}, currentTR.data('record'));

	newCurrentRecord[GLOBAL_CONSTANTS.UPDATABLE_FIELDS[0]] = allTdText[0];
    newCurrentRecord[GLOBAL_CONSTANTS.UPDATABLE_FIELDS[1]] = allTdText[1];
    newCurrentRecord[GLOBAL_CONSTANTS.UPDATABLE_FIELDS[2]] = allTdText[2];
    newCurrentRecord[GLOBAL_CONSTANTS.UPDATABLE_FIELDS[3]] = allTdText[6];
    newCurrentRecord[GLOBAL_CONSTANTS.UPDATABLE_FIELDS[4]] = allTdText[7];
    newCurrentRecord[GLOBAL_CONSTANTS.UPDATABLE_FIELDS[5]] = allTdText[8];

    currentTR.attr('data-new-record', JSON.stringify(newCurrentRecord));
        $(_self).html('EDIT');
}