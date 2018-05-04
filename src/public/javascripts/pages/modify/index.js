import sortOptions from './sortOptions';
import filterList from './filterList';
import populateSuperviseeList from './populateSuperviseeList';
import drop from './dropHandler';
import selected from './selectedHandler';
import uploadModifiedInfo from './uploadModifiedInfo';

$(document).ready(function() {
    $(document).find('.modify-container .supervisor').first().trigger('click');
    $('.sort-option input[type=radio]').not('input[name="sortOption"]').not('.default-enabled').prop('disabled','disabled');
    $(".supervisor-list li").sort(sortOptions).appendTo('.supervisor-list');
});

$(document).on('click', '.supervisor', function(e) {
    populateSuperviseeList(e);
});

$(document).on('click', '.superviseeList li', function(e) {
    selected(e);
});

$(document).on('dragstart', '.superviseeList li', function(ev) {
    ev.originalEvent.dataTransfer.setData("text", ev.target.className);
});

$(document).on('dragover', '.supervisor', function(ev) {
    ev.preventDefault();
});

$(document).on('drop', '.supervisor', function(e) {
    drop(e);
});

$(document).on('click', '#modifySubmitButton', function(e) {
    uploadModifiedInfo(e);
});

$(document).on('change', '.actionable-item input[name="sortOption"]', (event)=> {
    var radioOptions = $(event.target).parents('.sort-option').find('input[type=radio]').not('input[name="sortOption"]');
    $('.sort-option input[type=radio]').not('input[name="sortOption"]').prop('disabled','disabled');
    if($(event.target).prop('checked')){
        radioOptions.removeAttr('disabled');
    }
    $(".supervisor-list li").sort(sortOptions).appendTo('.supervisor-list');
});

$(document).on('change', '.actionable-item input[type=radio]:enabled', function(e) {
    $(".supervisor-list li").sort(sortOptions).appendTo('.supervisor-list');
});

$(document).on("keyup", '#searchInput', function() {
    let filter = $(this).val();
    if (filter.length > 3) {
        filterList(filter);
    } else  {
        $(".supervisor-list li").each(function() {
            $(this).css('display',  'block');
        });
    }
});