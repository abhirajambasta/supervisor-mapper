import availableDesignation from './availableDesignation';
import updateAllowedSupervisorList from './updateAllowedSupervisorList';
import tableEditHandler from './tableEditHandler';
import tableSaveHandler from './tableSaveHandler';

module.exports = function(event) {

    let selectedUserFields = $(event.target).closest('tr'),
        selectList = $('<select>').addClass('designation-list form-control t-font-three-quarters'),
        currentRowAllTD = $(event.target).parents('tr').find('td');

    updateAllowedSupervisorList(selectedUserFields.find("[data-fieldtype='TitleName']").html(), availableDesignation()).forEach(function(allowedSupervisor) {
        selectList.append($("<option>").attr('value', allowedSupervisor).text(allowedSupervisor));
    });

    if ($(event.target).html() == 'EDIT') {
        tableEditHandler(currentRowAllTD, selectedUserFields, selectList, event.target);
    } else if ($(event.target).html() == 'SAVE') {
        tableSaveHandler(currentRowAllTD, event.target);
    }

}