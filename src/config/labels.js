// All page related constant like label are initialized here.
export const PAGE_LABELS = {
    Login: {
        pageTitle: 'Login to Supervisor Mapping',
        heading: ' Supervisor Mapping',
        username: 'Username',
        password: 'Password',
        usernamePlaceholder: 'Enter your username',
        passwordPlaceholder: 'Enter your password',
        submit: 'Login',
        reset: 'Reset'
    },
    Home: {
        pageTitle: 'Welcome to home-Dashboard',
        browse: 'Browse',
        noneAttachment: 'No Attachment',
        uploadBtn: 'Upload',
        downloadBtn: 'Download',
        mappingBtn: 'Supervisor Mapping',
        browseTooltip: 'Add your file',
        fileTooltip: 'Attached File Name',
        uploadTooltip: 'Upload on DB and see the difference',
        downloadTooltip: 'Download the latest uploaded record as XL file',
        mappingTooltip: 'Navigate to modify supervisee list',
        fileTypeAccept: '.xl*',
        supervisorSearch: 'Search by Supervisor Name',
        personSearch: 'Search by Person Name',
        supervisorSearchPlaceholder: 'By Supervison Name...',
        personSearchPlaceholder: 'By Person Name...',
        edit: 'EDIT',
        editUpdate: 'Edit and Update',
        updateDataTooltip: 'Update the edited data of table to DB',
        updateData: 'Update Data',
        noContentStatusCode: '204',
        noContentMessage: 'No Content Available..!',
        noContentSubMessage: 'The possible reason behind this may be no records availability on your database.'
    },
    Header: {
        heading: ' Supervisor Mapping',
        logoutTooltip: 'Logged Out from App',
        logout: 'Logout',
        toolbarTooltip: 'Access all utilities from here...',
        toolbar: 'Toolbar',
        homeTooltip: 'Go to Home',
        home: 'Home'
    },
    Footer: {
        footer: ' , All rights reserved.'
    },
    Error_401: {
        pageTitle: 'Unauthorized: Access',
        statusCode: '401',
        message: 'Unauthorized: Access is denied due to invalid credentials!',
        submessage: 'You don\'t have permission to view this page or directory using the credentials that you supplied.!',
        back: 'Back to Login Page'
    },
    Error_404: {
        pageTitle: 'Page not found - Error',
        statusCode: '404',
        message: 'Page not found!',
        submessage: 'Oops! The Page you requested was not found.',
        back: 'Back to Login Page'
    },
    Difference: {
        pageTitle: 'Display the difference between last two records',
        upload: 'Save',
        uploadTooltip: 'Upload the changed record into Database',
        lastActionableHead: 'Action',
        accept: 'Accept',
        reject: 'Rollback',
        unModifiedStatusCode: '304',
        unModifiedMessage: 'No Difference Available..!',
        unModifiedSubMessage: 'It seems that the records currently uploaded are an exact match with the existing records available on database.',
        backHome: 'Back to HOME page'
    },
    Edit: {

    },
    Modify: {
        pageTitle: 'Map multiple Supervisee to a Supervisor',
        sortBy: 'Sort By:',
        count: 'Count',
        designation: 'Designation',
        startDate: 'Start Date',
        saveChanges: 'Save Changes',
        saveChangesTooltip: 'Modify the edited data of table to DB',
        supervisor: 'Supervisor',
        supervisorSearch: 'Search by Supervisor name',
        supervisee: 'Supervisee',
        name: 'Name'
    }
}