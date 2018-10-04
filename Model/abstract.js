Model.Abstract = function () {
    this.setProperty = function (configuration, propertyName, defaultValue, modelController) {
        if (configuration.hasOwnProperty(propertyName)) {
            return configuration[propertyName];
        } else {
            propertyName = propertyName[0].toUpperCase() + propertyName.substring(1);
            if (configuration.hasOwnProperty(propertyName)) {
                  let configurationValue = configuration[propertyName];
                if (typeof configurationValue === 'object') {
                    if(configurationValue.constructor === Array) {
                        let elementlist = [];
                        for (let i in configurationValue) {
                            let configurationSubValue = configurationValue[i];
                            let className = this.prototype.constructor.name;
                            let childBackReferencePropertyName = className.substr(className.lastIndexOf('.') + 1);
                            childBackReferencePropertyName = childBackReferencePropertyName[0].toLowerCase() + childBackReferencePropertyName.substring(1);
                            configurationSubValue[childBackReferencePropertyName] = this;

                            let existingReference = modelController.getById(configurationSubValue.Id);
                            if (undefined !== existingReference) {
                                elementList.push(existingReference);
                            } else {
                                elementList.push(modelController.add(configurationSubValue));
                            }
                        }
                        return elementList;
                    } else {
                        let existingReference = modelController.getById(configurationValue.Id);
                        if (undefined !== existingReference) {
							return existingReference;
						} else {
							return modelController.add(configurationValue);
						}
                    }
                } else {
					return configurationValue;
				}
            }
        }
        return defaultValue;
    };
}

//Model.Abstract.prototype = Object.create(EventEmitter3.prototype);
Model.Abstract.prototype.constructor = Model.Abstract;