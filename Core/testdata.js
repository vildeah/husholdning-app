$(document).ready(function(){
    let todoItem1 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske doen", description:'Husk å vaske under setet også!! (Bendik treffer aldri)', difficulty: 0});
    let todoItem2 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Ta pappavfallet", description:'Det ligger noe under vasken også', difficulty: 1});
    let todoItem3 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske vinduene i stua", description:'Bruk Jif - universalvask', difficulty: 2});
    let todoItem4 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Reparér hyllen på badet", description:'Må bruke lengre skruer, ellers sitter den ikke', difficulty: 3});
});