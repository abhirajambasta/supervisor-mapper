module.exports = function() {
    $(function() {
        $(".preload").fadeOut(2000, function() {
            $(".table-container").fadeIn(1000);
        });
    });
}