$("#beefButton").on('click', function(){
	$('#beef').removeClass('display-hidden');
	$('#chicken').addClass('display-hidden'); 
	$('#sushi').addClass('display-hidden');
});
$("#sushiButton").on('click', function(){
	$('#sushi').removeClass('display-hidden');
	$('#chicken').addClass('display-hidden'); 
	$('#beef').addClass('display-hidden');
});
$("#chickenButton").on('click', function(){
	$('#chicken').removeClass('display-hidden');
	$('#beef').addClass('display-hidden'); 
	$('#sushi').addClass('display-hidden');
});
$('#topMenu').on('click', function(){
	$('.topMenuContent').toggleClass('display-hidden');
});