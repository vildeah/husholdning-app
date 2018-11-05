Model.Properties.Boolean = function(value) {

	/** @type {boolean} */
	let _value;

	/**
	 *
	 * @param {boolean} value
	 */
	this.set = function(value) {
		if (_value !== value) {
			_value = value;
		}
	};

	this.get = function() {
		return _value;
	};

	if (undefined !== value) {
		_value = value;
	}
};