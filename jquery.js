$(document).ready(function(){
	/*
	$("#payButton").click(function(){
        $("#changeToggle").hide();
    });
	*/
	$("#billquantities").hide();
	$('#centquantities').hide();
	$('#leftover').hide();
	$('#tipTotal').hide();
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

    $("#payButton").click(function(){
        $("#billquantities").show(200);
        $('#centquantities').show(200);
    });
});