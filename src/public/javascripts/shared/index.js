import tabularMouseMovement from './tabularMouseMovement';
import loader from './loader';

$('html').on('mousewheel', '.table-Scrollbar', function(e, delta) {
    tabularMouseMovement(e, delta, this);
});

$('html').on('click', '.l-footer .triangle-icon', function(event) {
    $(event.currentTarget).siblings('.sub-label').toggle('slow');
});

module.exports = {
    loader: loader
}