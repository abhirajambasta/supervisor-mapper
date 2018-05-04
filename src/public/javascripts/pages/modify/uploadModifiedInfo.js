module.exports = function() {
    $.ajax({
        url: '/home/modify',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify($(".supervisor-container").data("supervisormap")),
        success: (data) => (data.redirect) ? window.location = data.redirect : window.location = "#"
    });
}