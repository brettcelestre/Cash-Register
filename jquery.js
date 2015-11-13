$(document).ready(function(){
	$('#payAmount').keypress(function(e) {
		if(e.which == 13) {
		  $('#payButton').click();
		}
	});

	$('#bills').hide();
	$('#coins').hide();
	$("#billquantities").hide();
	$('#centquantities').hide();
	$('#leftover').hide();
	$('#tipTotal').hide();
	$('#paidtotal').hide();
	$('#tips').hide();

	$('#0tip').click(function(){
		$('#tipTotal').hide(200);
	});

	$('#10tip').click(function(){
		$('#tipTotal').show(200);
	});

	$('#15tip').click(function(){
		$('#tipTotal').show(200);
	});

	$('#20tip').click(function(){
		$('#tipTotal').show(200);
	});
});
