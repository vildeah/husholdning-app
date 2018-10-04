{    
    let TodoItemModelController = function () {
        ModelControllers.Abstract.call(this, Model.TodoItem);

        let _add = this.add;
        this.add = function(configuration) {
            return _add.call(this, configuration);
        };

        let _getById = this.getById;
        this.getById = function(Id) {
            return _getById.call(this, Id);
        };

        let _getAll = this.getAll;
        this.getAll = function() {
            return _getAll.call(this);
        };
    };

    TodoItemModelController.prototype = Object.create(ModelControllers.Abstract.prototype);
    TodoItemModelController.prototype.constructor = TodoItemModelController;
    ModelControllers.TodoItems = new TodoItemModelController();
}