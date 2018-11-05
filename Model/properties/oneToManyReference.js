Model.Properties.OneToManyReference = function(parent, propertyName, foreignModelPropertyName, value) {
    let _parent = parent;
	let _propertyName = propertyName;
	let _foreignModelPropertyName = foreignModelPropertyName;
	let _value;

	let _set = function(foreignElement) {
		if (foreignElement === _value) {
			return false;
		}

		let oldValue = _value;
		_value = foreignElement;

		if (undefined !== oldValue && oldValue !== null) {
			let oldProperty = oldValue[_foreignModelPropertyName];
			if (undefined !== oldProperty) {
				oldProperty.remove(_parent);
				return true;
			}
		}

		if (foreignElement !== null) {
			let property = foreignElement[_foreignModelPropertyName];
			if (undefined !== property) {
				let backReferences = property.get();
				if (backReferences.indexOf(_parent) === -1) {
					property.add(_parent);
					return true;
				}
			}
		}

		return false;
    };
    
    this.set = function(foreignElement) {
		if (_set(foreignElement)) {
			_parent.emitUpdate(_propertyName + "Updated");
		}
	};

	this.get = function() {
		return _value;
	};

	if (undefined !== value) {
		_set(value);
	}
};