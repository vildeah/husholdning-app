Model.TodoItem = function(configuration) {
    Model.Abstract.call(this);
    this.id = new Model.Properties.StringReadOnly(this.setProperty(configuration, 'id', ""));
    this.name = new Model.Properties.String(this.setProperty(configuration, 'name', ""));
    this.description = new Model.Properties.String(this.setProperty(configuration, 'description', ''));
    this.difficulty = new Model.Properties.Number(this.setProperty(configuration, 'difficulty', 0));
    this.points = new Model.Properties.Number(this.setProperty(configuration, "points", 0));

    switch(this.difficulty) {
        case 0: this.points = 5;  break;
        case 1: this.points = 10; break;
        case 2: this.points = 15; break;
        case 3: this.points = 20; break;
        case 4: this.points = 25; break;
    }
};
Model.TodoItem.prototype = Object.create(Model.Abstract.prototype);
Model.TodoItem.prototype.constructor = Model.TodoItem;