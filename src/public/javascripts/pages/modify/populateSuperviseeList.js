
module.exports = function(e) {
    let currentTarget = e.currentTarget,
        selectedId = currentTarget.id,
        supervisorMap = $(".supervisor-container").data("supervisormap"),
        superviseeList;
    if (!$(currentTarget).hasClass("selected")) {
        $(currentTarget.parentElement).find("li").each(function() {
            if ($(this).hasClass("selected")) {
                $(this).removeClass("selected");
            }
        });
        $(currentTarget).addClass("selected");
    }
    if ($(".superviseeList").children()) {
        $(".superviseeList").empty();
    }
    superviseeList = supervisorMap[selectedId].supervisee;
    $.each(superviseeList, function() {
        if (this.name) {
            $(".superviseeList").append("<li " + (this.new ? "class='new' " : " ") + "draggable='true' data-id='" + this.oracleId + "' data-supervisorId='" + selectedId + "'data-designation='" + this.designation + "'data-supervisorDesignation='" + this.supervisorDesignation + "'>" + this.name  + "</li>");
        }
    });
    if (parseInt($(currentTarget).find(".count").text()) !== Object.keys(superviseeList).length) {
        $(currentTarget).find(".count").text(Object.keys(superviseeList).length);
    }
}