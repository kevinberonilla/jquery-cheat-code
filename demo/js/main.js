$(document).ready(function() {
	function partyTime() {
		alert('custom function');
	}
	
	$(document).cheatcode({
		code: '38384040',
		time: 1000,
		callback: partyTime
	});
});