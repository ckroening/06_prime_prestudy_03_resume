$(document).ready(function() {
	$('.content').hide();
	$('.button').on('click', function() {
		$('.content').fadeIn();
		$('.button').remove();
	});
});