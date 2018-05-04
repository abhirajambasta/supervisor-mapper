module.exports = function(e) {
    e.preventDefault();
    var $currentTarget = $(e.currentTarget);
    if ($currentTarget.hasClass("highlight")) {
        $currentTarget.removeClass("highlight")
    } else if ($currentTarget.hasClass("new")) {
        $currentTarget.addClass("highlight");
        $currentTarget.removeClass("new")
    } else {
        $currentTarget.addClass("highlight");
    }
    e.stopPropagation();
}