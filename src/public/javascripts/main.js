import pages from './pages';
import shared from './shared';

shared.loader();

$(document).ready(function() {
    $('#recordTableContainer').DataTable();
});