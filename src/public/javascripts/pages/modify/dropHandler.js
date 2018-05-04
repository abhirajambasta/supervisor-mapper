import populateSuperviseeList from './populateSuperviseeList';
import * as GLOBAL_CONSTANTS from './../../config/constants';

module.exports = function(ev) {
    ev.preventDefault();
    var data = ev.originalEvent.dataTransfer.getData("text"),
        dataToTransfer = $(".highlight"),
        supervisorMap = $(".supervisor-container").data("supervisormap"),
        newSupervisor = ev.currentTarget.id,
        oldCount,
        newCount,
        currentSupervisor,
        designationList = GLOBAL_CONSTANTS.DESIGNATION_ARRAY;
    $.each(dataToTransfer, function(index, value) {
        var oracleId = $(value).data("id");
        if (!currentSupervisor) {
            currentSupervisor = $(value).data("supervisorid");
            oldCount = Object.keys(supervisorMap[currentSupervisor].supervisee).length;
        }
        if (parseInt(newSupervisor) !== oracleId && (designationList.indexOf($(value).data('designation').toLowerCase()) < designationList.indexOf($(ev.currentTarget).data('designation')))) {
            delete supervisorMap[currentSupervisor].supervisee[oracleId];
            supervisorMap[newSupervisor].supervisee[oracleId] = {
                name: $(value).text(),
                oracleId: oracleId,
                new: true
            };
        }
    })
    supervisorMap[currentSupervisor] ? newCount = Object.keys(supervisorMap[currentSupervisor].supervisee).length : window.alert('Please select a Supervisee first');
    if (newCount !== oldCount) {
        $(".supervisor-list li[id=" + currentSupervisor + "]").find(".count").text(newCount);
        $(".supervisor-container").data("supervisormap", supervisorMap);
        populateSuperviseeList(ev);
    }
}