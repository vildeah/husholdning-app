Display.Navigation = (function() {
    //Disse funksjonene baserer seg på jQuery-metoder. Les jQuery-dokumentasjon hvis du trenger her https://api.jquery.com/
    function changeTab (areaName) {
        $('#main-navigation').children().removeClass('active');      
        $('#main-navigation__' + areaName).parent().addClass('active');
      //  console.log($('#area__' + areaName));
        $('#area__list').children().removeClass('area--active');
        $('#area__' + areaName).addClass('area--active');
    }
    return {
        activateBulletin: function() {
            changeTab('bulletin');
        },
        activateTodo: function() {
            changeTab('to-do');
        },
        activateShoppingList: function() {
            changeTab('shopping-list');
        }
    }
})();

$(document).ready(function() {
    $('#main-navigation__bulletin').click(Display.Navigation.activateBulletin);
    $('#main-navigation__to-do').click(Display.Navigation.activateTodo);
    $('#main-navigation__shopping-list').click(Display.Navigation.activateShoppingList);
})