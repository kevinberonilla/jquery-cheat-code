/* --------------------------------------------------
jQuery Cheat Code v1.02

By Kevin Beronilla
http://www.kevinberonilla.com

Fork on GitHub
https://github.com/kevinberonilla/jquery-cheatcode

Free to use under the MIT license
http://www.opensource.org/licenses/mit-license.php
-------------------------------------------------- */
(function($) { // Protect the $ alias (IIF)
    $.fn.cheatcode = function(options) {
        var timer,
            input = '',
            settings = $.extend({ // Extend the default settings established below
                code: '38384040373937396665',
                time: 500,
                callback: function() { alert('Invincibility enabled!'); }
            }, options);
        
        function checkInput() {
            if (input == settings.code) {
                settings.callback.call(this); // Call the callback
            }
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