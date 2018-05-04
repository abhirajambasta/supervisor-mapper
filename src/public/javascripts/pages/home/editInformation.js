module.exports = function(e) {
    e.preventDefault();
    var dataToSend = [],
        allTR = $('#recordTableContainer').dataTable().fnGetNodes();

    $.each(allTR, function() {
        dataToSend.push($(this).data('new-record') ? $(this).data('new-record') : $(this).data('record'));
    });

    $.ajax({
        url: '/home/edit',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dataToSend),
        success: (data) => (data.redirect) ? window.location = data.redirect : window.location = "/home/difference"
    });
}