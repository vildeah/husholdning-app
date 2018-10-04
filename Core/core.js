let Display = {};
let Model= {};
Model.Properties = {};
let ModelControllers = {};
let ViewControllers = {};
let Core = (function() {

    let autoNumber = 1;

    return {
        generateAutoNumber: function() {
            autoNumber++;
            return autoNumber.toString();
        }
    }

}) ();