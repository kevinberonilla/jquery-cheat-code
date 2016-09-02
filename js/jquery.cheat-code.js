/* --------------------------------------------------
jQuery Cheat Code v1.04

By Kevin Beronilla
http://www.kevinberonilla.com

Fork on GitHub
https://github.com/kevinberonilla/jquery-cheat-code

Free to use under the MIT license
http://www.opensource.org/licenses/mit-license.php
-------------------------------------------------- */
(function($) { // Protect the $ alias (IIF)
    $.fn.cheatCode = function(options) {
        var timer,
            input = '',
            settings = $.extend({ // Extend the default settings established below
                code: 38384040373937396665,
                time: 500,
                callback: function() { alert('Invincibility enabled!'); }
            }, options);
        
        function checkInput() {
            if (input === settings.code.toString()) settings.callback();
        }
        
        this.keyup(function(e) {
            input += e.which; // Add the pressed key code
            clearTimeout(timer);
            timer = setTimeout(function() { input = ''; }, settings.time); // Clear the input if time runs out
            checkInput();
        });
        
        return this; // Return the object to enable chaining
    }
}(jQuery));