Model.TodoItem = function(configuration) {
    Model.Abstract.call(this);
    this.id = new Model.Properties.StringReadOnly(this.setProperty(configuration, 'id', ""));
    this.name = new Model.Properties.String(this.setProperty(configuration, 'name', ""));
    this.description = new Model.Properties.String(this.setProperty(configuration, 'description', ''));
    this.importance = new Model.Properties.Number(this.setProperty(configuration, 'importance', 0));
    this.points = new Model.Properties.Number(this.setProperty(configuration, "points", 0));
};
Model.TodoItem.prototype = Object.create(Model.Abstract.prototype);
Model.TodoItem.prototype.constructor = Model.TodoItem;