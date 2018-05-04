module.exports = function(event) {
    let newCurrentRecord,
        completeData = [],
        selectedRecord,
        selectedSupervisor = $(event.target).find(":selected").text(),
        selectedRecordNode = $(event.target).closest('tr');
    newCurrentRecord = $(selectedRecordNode).data('newRecord') ? $(selectedRecordNode).data('newRecord') : $(selectedRecordNode).data('record');
    $.each($('#recordTableContainer').dataTable().fnGetNodes(), function() {
        completeData.push($(this).closest('tr').data('record'));
    });
    selectedRecord = $.grep(completeData, function(item) { return item['Supervisor'] == selectedSupervisor; });
    selectedRecordNode.find("[data-fieldtype='SupervisorID']").html(selectedRecord[0]['SupervisorID']);
    selectedRecordNode.find("[data-fieldtype='SupervisorDesignation']").html(selectedRecord[0]['SupervisorDesignation']);
}