module.exports = function() {

    let completeData = [],
        listByDesignation = {},
        designationAvailable;

    $.each($('#recordTableContainer').dataTable().fnGetNodes(), function() {
        completeData.push($(this).data('record'));
    });


    designationAvailable = completeData.map(data => data.SupervisorDesignation).filter((item, pos) => {
        return completeData.map(data => data.SupervisorDesignation).indexOf(item) == pos;
    });

    designationAvailable.forEach((designation) => {
        listByDesignation[designation] = [];
        let supervisorList = [];
        let filteredDesignationList = completeData.filter((obj) => {
            return obj.SupervisorDesignation == designation;
        });
        filteredDesignationList.forEach((filteredDesignation) => {
            supervisorList.push(filteredDesignation.Supervisor);
        })
        listByDesignation[designation] = supervisorList;
    });

    return listByDesignation;
}