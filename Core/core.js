let Display = {};
let Model= {};
let ModelControllers = {};
let ViewControllers = {};
let Core = (function() {

    return {
        alterHeaderText: function () {
           let header = document.getElementById('header__text');
           header.innerHTML = 'Juhuu!';
        },
    }
}) ();