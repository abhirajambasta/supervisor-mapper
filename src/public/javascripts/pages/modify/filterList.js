module.exports = function(value) {
    let list = $(".supervisor-list li");
    if (!value.length) {
        $(this).delay(200).slideDown("fast");
    }
    $(list).fadeOut("fast");

    $(".supervisor-list").find("li[data-tag*=" + value.toLowerCase().replace(/\s/g,'').split('.').join('') + "]").each(function(i) {
        $(this).delay(200).slideDown("fast");
    });
}