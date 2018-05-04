import searchByParameter from './searchByParameter';
import populateList from './populateList';
import editInformation from './editInformation';
import toolbar from './toolbar';
import uploadButtonEnabler from './uploadButtonEnabler';
import modifyTableInfo from './modifyTableInfo';
import uploadLoader from './uploadLoader';

let searchParameters = [{
        searchId: '#supervisorSearch',
        searchIndex: '0'
    },
    {
        searchId: '#personSearch',
        searchIndex: '4'
    }
];

$('#fileForm #uploadButton').prop('disabled', true);

$('.table-container #updateButton').prop('disabled', true);

$.each(searchParameters, function(index, value) {
    $(document).on('keyup', value.searchId, function() {
        searchByParameter(value.searchIndex, this);
    });
});

$(document).on('click', '.designation-list', function(event) {
    populateList(event);
});

$(document).on('click', '.table-container #updateButton', function(event) {
    editInformation(event);
});

$(document).on('click', '#toolbarBtn', function() {
    toolbar(this);
});

$(document).on('change', 'input#csvFile:file', function(event) {
    uploadButtonEnabler(event);
});

$(document).on('click', '#recordTableContainer .edit-link', function(event) {
    modifyTableInfo(event);
});

$(document).on('click', '#fileForm #uploadButton', function(event) {
    uploadLoader(event);
});