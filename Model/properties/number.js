Model.Properties.Number = (function (value) {

    let _value;
    this.set = function(value) {
        if (_value !== value) {
            _value = value;
        }
    }

    this.get = function() {
        return _value;
    }

    if (undefined !== value) {
        _value = value;
    }
});