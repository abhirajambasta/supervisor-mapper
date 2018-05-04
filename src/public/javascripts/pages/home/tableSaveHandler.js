import modifyNewInfo from './modifyNewInfo';

module.exports = function(currentRowAllTD, _self) {
    let allTdText = [];

    $('.table-container #updateButton').prop('disabled', false);
    $.each(currentRowAllTD, function() {
        $(this).removeClass('l-editable-field-border');
    })

    $.each(currentRowAllTD, function(index) {
        if (index != 9) {
            if ($(this).data('fieldtype') !== 'Supervisor') {
                allTdText.push($(this).html());
            } else {
                allTdText.push($(this).find(":selected").text());
                $(this).find('.designation-list').closest('td').html($(this).find(":selected").text());
            }
        }
    })

    modifyNewInfo(allTdText, _self);
}