module.exports = function(searchIndex, _self) {
    let tableInstance = $('#recordTableContainer').DataTable();

    tableInstance
        .columns(Number(searchIndex))
        .search(_self.value)
        .draw();
}