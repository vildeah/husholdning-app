Model.Member = function (configuration) {
    Model.Abstract.call(this);
    this.id = new Model.Properties.StringReadOnly(this.setProperty(configuration, 'id', ""));
    this.name = new Model.Properties.String(this.setProperty(configuration, 'name', ""));
    this.assignedTodoItems = new Model.Properties.OneToManyReference(this, 'assignedTodoItems', 'member', this.setProperty(configuration, 'assignedTodoItems', [], ModelControllers.TodoItems));
    this.doneTodoItems = new Model.Properties.OneToManyReference(this, 'doneTodoItems', 'member', this.setProperty(configuration, 'doneTodoItems', [], ModelControllers.TodoItems));
    this.points = new Model.Properties.Number(this.setProperty(configuration, 'points', 0));  
    this.signedIn = new Model.Properties.Boolean(this.setProperty(configuration, 'signedIn', false));

    this.destruct = function() {
		this.deleted = true;
    }

};
Model.TodoItem.prototype = Object.create(Model.Abstract.prototype);
Model.TodoItem.prototype.constructor = Model.TodoItem;