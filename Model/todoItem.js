Model.TodoItem = function(configuration) {
    Model.Abstract.call(this);
    this.id = new Model.Properties.StringReadOnly(this.setProperty(configuration, 'id', ""));
    this.name = new Model.Properties.String(this.setProperty(configuration, 'name', ""));
    this.description = new Model.Properties.String(this.setProperty(configuration, 'description', ''));
    this.difficulty = new Model.Properties.Number(this.setProperty(configuration, 'difficulty', 0));
    this.points = new Model.Properties.Number(this.setProperty(configuration, 'points', 0));
    this.status = new Model.Properties.Number(this.setProperty(configuration, 'status', 0));

    /* Status:
      0: not done
      1: done */

    this.destruct = function() {
		this.deleted = true;
	}

};
Model.TodoItem.prototype = Object.create(Model.Abstract.prototype);
Model.TodoItem.prototype.constructor = Model.TodoItem;