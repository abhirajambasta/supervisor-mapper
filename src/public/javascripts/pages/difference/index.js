import uploadInfo from './uploadInfo';

$(document).on('click', '#uploadButton.diff-upload', function(e) {
    uploadInfo(e);
});