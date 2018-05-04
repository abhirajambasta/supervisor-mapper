import * as TABLE_CONSTANTS from '../../config/constants';

module.exports = function(selectedTitle, listByDesignation) {
    let allowedSupervisorList = [],
        designationConstants = TABLE_CONSTANTS.DESIGNATION,
        MANAGER = designationConstants.MANAGER.value,
        SENIOR_MANAGER = designationConstants.SENIOR_MANAGER.value,
        DIRECTOR = designationConstants.DIRECTOR.value,
        SENIOR_DIRECTOR = designationConstants.SENIOR_DIRECTOR.value,
        SENIOR_ASSOCIATE_L2 = designationConstants.SENIOR_ASSOCIATE_L2.value,
        SENIOR_ASSOCIATE_L1 = designationConstants.SENIOR_ASSOCIATE_L1.value,
        ASSOCIATE_L1 = designationConstants.ASSOCIATE_L1.value,
        ASSOCIATE_L2 = designationConstants.ASSOCIATE_L2.value,
        JUNIOR_ASSOCIATE = designationConstants.JUNIOR_ASSOCIATE.value,
        NA = designationConstants.NA.value;

    listByDesignation[NA] = [];

    if (selectedTitle == JUNIOR_ASSOCIATE || selectedTitle == ASSOCIATE_L1 || selectedTitle == ASSOCIATE_L2 || selectedTitle == SENIOR_ASSOCIATE_L1) {
        allowedSupervisorList = [...listByDesignation[SENIOR_ASSOCIATE_L2], ...listByDesignation[MANAGER], ...listByDesignation[SENIOR_MANAGER], ...listByDesignation[DIRECTOR], ...listByDesignation[SENIOR_DIRECTOR], ...listByDesignation[NA]];
    } else if (selectedTitle == SENIOR_ASSOCIATE_L2) {
        allowedSupervisorList = [...listByDesignation[MANAGER], ...listByDesignation[SENIOR_MANAGER], ...listByDesignation[DIRECTOR], ...listByDesignation[SENIOR_DIRECTOR], ...listByDesignation[NA]];
    } else if (selectedTitle == MANAGER) {
        allowedSupervisorList = [...listByDesignation[SENIOR_MANAGER], ...listByDesignation[DIRECTOR], ...listByDesignation[SENIOR_DIRECTOR], ...listByDesignation[NA]];
    } else if (selectedTitle == SENIOR_MANAGER) {
        allowedSupervisorList = [...listByDesignation[DIRECTOR], ...listByDesignation[SENIOR_DIRECTOR], ...listByDesignation[NA]];
    } else if (selectedTitle == DIRECTOR) {
        allowedSupervisorList = [...listByDesignation[DIRECTOR], ...listByDesignation[SENIOR_DIRECTOR], ...listByDesignation[NA]];
    } else if (selectedTitle == SENIOR_DIRECTOR) {
        allowedSupervisorList = listByDesignation[NA];
    }

    if (allowedSupervisorList) {
        allowedSupervisorList = allowedSupervisorList.filter(function(element) {
            return element !== undefined;
        });
        allowedSupervisorList = $.unique(allowedSupervisorList);
    }

    return allowedSupervisorList;
}