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

        this.signInById = function(Id) {
            let _signedInMember = this.getSignedInMember();
            _signedInMember.signedIn.set(false);
            let _member = this.getById(Id);
            _member.signedIn.set(true);
        }

        this.getSignedInMember = function() {
            let _members = this.getAll();
            let _signedInMember;
            for (i in _members) {
                if (_members[i].signedIn.get()) {
                    return _members[i];
                }
            }
        }

        this.todoItemRemoved = function(todoItemId) {
            let _members = this.getAll();
            for (i in _members) {
                let _assignedTodoItems = _members[i].assignedTodoItems.get();
                for (let j = 0; j <_assignedTodoItems.length; j++) {
                    if (todoItemId == _assignedTodoItems[j].id.get()) {
                        _assignedTodoItems.splice(j, 1);
                        _members[i].assignedTodoItems.set(_assignedTodoItems);
                        break;
                    }
                }
            }
        }
    };
    MemberModelController.prototype = Object.create(ModelControllers.Abstract.prototype);
    MemberModelController.prototype.constructor = MemberModelController;
    ModelControllers.Members = new MemberModelController();
}