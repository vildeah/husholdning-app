$(document).ready(function(){
    let todoItem1 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske doen", description:'Husk å vaske under setet også!! (Bendik treffer aldri)', importance: 3, points: 20});
    let todoItem2 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Ta pappavfallet", description:'Det ligger noe under vasken også', importance: 2, points: 15});
    let todoItem3 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Vaske vinduene i stua", description:'Bruk Jif - universalvask', importance: 1, points: 30});
    let todoItem4 = ModelControllers.TodoItems.add({id: Core.generateAutoNumber(), name: "Reparér hyllen på badet", description:'', importance: 4, points: 35});
});