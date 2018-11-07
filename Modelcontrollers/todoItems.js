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

        let _remove = this.remove;
		this.remove = function(Id) {
            ModelControllers.Members.todoItemRemoved(Id)
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

        this.getNotDoneItems = function() {
            let _allItems = this.getAll();
            let _notDoneItems = [];
            for (i in _allItems) {
                if(_allItems[i].status.get() == 0) {
                    _notDoneItems.push(_allItems[i]);
                }
            }
            return _notDoneItems;
        }

    };

    TodoItemModelController.prototype = Object.create(ModelControllers.Abstract.prototype);
    TodoItemModelController.prototype.constructor = TodoItemModelController;
    ModelControllers.TodoItems = new TodoItemModelController();
}