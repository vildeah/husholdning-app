$(document).ready(function(){
    let todoItem1 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske doen", description:'Husk å vaske under setet også!! (Bendik treffer aldri)', difficulty: 3});
    let todoItem2 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Ta pappavfallet", description:'Det ligger noe under vasken også', difficulty: 2});
    let todoItem3 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske vinduene i stua", description:'Bruk Jif - universalvask', difficulty: 1});
    let todoItem4 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Reparér hyllen på badet", description:'Må bruke lengre skruer, ellers sitter den ikke', difficulty: 4});
    let todoItem5 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vanne plantene", description:'Ikke mer enn to spiseskjeer til kaktusen', difficulty: 0});
    let todoItem6 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vanne Bendik", description:'Ikke mer enn to spiseskjeer til kaktusen', difficulty: 4});
});