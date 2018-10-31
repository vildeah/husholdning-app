{    
    let TodoItemModelController = function () {
        ModelControllers.Abstract.call(this, Model.TodoItem);

        let _add = this.add;
        this.add = function(configuration) {
            let points;
            switch (configuration.difficulty) {
                case 0: points = 5; break;
                case 1: points = 10; break;
                case 2: points = 15; break;
                case 3: points = 20; break;
                case 4: points = 25; break;
            }
            let newConfig = Object.assign({}, configuration, {points: points});
            return _add.call(this, newConfig);
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