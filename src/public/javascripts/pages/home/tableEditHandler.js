module.exports = function(currentRowAllTD, selectedUserFields, selectList, _self) {
    let selectedSupervisor = selectedUserFields.find("[data-fieldtype='Supervisor']").text();
    $(selectList[0]).find('option').each(function(index, element) {
        if ($(element).text() === selectedSupervisor)
            $(element).attr('selected', true);
    }, this);
    selectedUserFields.find("[data-fieldtype='Supervisor']").html(selectList);
    $.each(currentRowAllTD, function() {
        if ($(this).data('editable')) {
            $(this).addClass('l-editable-field-border');
        }
    })
    $(_self).html('SAVE');
}