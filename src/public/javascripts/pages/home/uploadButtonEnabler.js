module.exports = function(e){
	$('span#fileNameContainer').html('Attached File : ' + e.target.files[0].name);
    $('#fileForm #uploadButton').prop('disabled', false);
}