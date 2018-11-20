$(document).ready(function(){
    let todoItem1 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske doen", description:'Husk å vaske under setet også!', difficulty: 0});
    let todoItem2 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Ta pappavfallet", description:'Det ligger noe under vasken også', difficulty: 1});
    let todoItem3 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske vinduene i stua", description:'Bruk Jif - universalvask', difficulty: 2});
    let todoItem4 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Reparér hyllen på badet", description:'Må bruke lengre skruer, ellers sitter den ikke', difficulty: 3});

    let member1 = ModelControllers.Members.add({id: Core.generateAutoNumber(), name: "Bendik", assignedTodoItems: [], doneTodoItems: [], signedIn: true});
    let member2 = ModelControllers.Members.add({id: Core.generateAutoNumber(), name: "Vilde", assignedTodoItems: [], doneTodoItems: [], signedIn: false});
    let member3 = ModelControllers.Members.add({id: Core.generateAutoNumber(), name: "Thomas", assignedTodoItems: [], doneTodoItems: [], signedIn: false});
    let member4 = ModelControllers.Members.add({id: Core.generateAutoNumber(), name: "Ranva", assignedTodoItems: [], doneTodoItems: [], signedIn: false});
});