var currentSlide = 0;
var max = 0;

$(document).ready(function(){
	max = $('.slides section').length;
});

$(document).keydown(function(e){
	if(e.keyCode == 37 && currentSlide > 0) {//left
		currentSlide -= 1;
	}
	
	if(e.keyCode == 39 && currentSlide < max -1) {//right
		currentSlide += 1;
	}
	
	$('body').removeClass();
	$('body').addClass('onslide-' + currentSlide);
});