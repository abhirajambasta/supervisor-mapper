import createInfo from './createInfo';

module.exports = function(e) {
    e.preventDefault();
    var selectedObj = {},
        diffData,
        dataToUpload,
        selectedData = [];

    diffData = $('#recordTableContainer').data('diff');
    dataToUpload = $('#recordTableContainer').data('completedata');

    $('input[type=radio]:checked').each(function() {
        selectedObj[$(this).attr('name')] = $(this).data('objnum');
    })
    diffData.forEach(function(obj) {
        for (var key in obj) {
            if (Array.isArray(obj[key])) {
                var oracleId = obj['OracleID'];
                obj[key] = obj[key][selectedObj[oracleId]];
            }
        }
    });
    createInfo(dataToUpload, diffData);
    $.ajax({
        url: '/home',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dataToUpload),
        success: (data) => (data.redirect) ? window.location = data.redirect : window.location = "#"
    });
}