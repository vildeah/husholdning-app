ModelControllers.Abstract = function (elementType) {
    let _elements = {};
    let _elementType = elementType;

    this.add = function(configuration){
        let newElement;
        if (configuration.constructor === _elementType) {
            newElement = configuration;
        } else {
            newElement = new _elementType(configuration);
        }

        _elements[newElement.id.get()] = newElement;

        return newElement;
    };

    this.getById = function(Id){
        return _elements[Id];
    }

    this.getAll = function() {
        let elements = [];
        for (let id in _elements) {
            elements.push(_elements[id]);
        }
        return elements;
    };
};

ModelControllers.Abstract.prototype.constructor = ModelControllers.Abstract;