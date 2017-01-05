var tabcontrol = (function(){

	$(window).blur(function() {
        display.pauseTicker();
    });

    $(window).focus(function() {
        display.resumeTicker();
    });

})();