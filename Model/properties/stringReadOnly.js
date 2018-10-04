Model.Properties.StringReadOnly = function(value) {
    let _value;

    if (undefined != value) {
        _value = value;
    }
    
    this.get = function() {
        return _value;
    }

}