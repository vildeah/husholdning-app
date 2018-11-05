{
    let MemberModelController = function () {
        ModelControllers.Abstract.call(this, Model.Member);

        let _add = this.add;
        this.add = function(configuration) {
            return _add.call(this, configuration);
        };

        let _remove = this.remove;
		this.remove = function(Id) {
			return _remove.call(this, Id)
		}

        let _getById = this.getById;
        this.getById = function(Id) {
            return _getById.call(this, Id);
        };

        let _getAll = this.getAll;
        this.getAll = function() {
            return _getAll.call(this);
        };
    };
    MemberModelController.prototype = Object.create(ModelControllers.Abstract.prototype);
    MemberModelController.prototype.constructor = MemberModelController;
    ModelControllers.Members = new MemberModelController();
}