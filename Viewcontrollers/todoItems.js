ViewControllers.TodoItems = (function() {

    return {
        //Bare test
        print: function() {
            console.log(ModelControllers.TodoItems.getById(2).name.get());
            console.log(ModelControllers.TodoItems.getById(2).description.get());
            console.log(ModelControllers.TodoItems.getById(2).importance.get());
            console.log(ModelControllers.TodoItems.getById(2).type.get());
        }
    }
    
})();