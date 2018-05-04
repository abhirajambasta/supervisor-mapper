module.exports = function(e, delta, _self) {
    _self.scrollLeft -= (delta * 40);
    e.preventDefault();
}