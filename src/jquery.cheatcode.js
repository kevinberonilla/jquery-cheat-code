(function ($) {
	$.fn.cheatcode = function(options) {
		var timer,
		input = '',
		settings = $.extend({
			code: '38384040373937396665',
			time: 500,
			callback: function() { alert('Cheat code activated!'); }
		}, options);
		
		function checkInput() {
			if (input == settings.code) {
				settings.callback.call(this);
			}
		}
		
		this.keyup(function(e) {
			input += e.which;
			clearTimeout(timer);
			timer = setTimeout(function() { input = ""; }, settings.time);
			checkInput();
		});
		
		return this;
	}
}(jQuery));