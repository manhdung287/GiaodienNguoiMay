jQuery(document).ready(function(){
    $('#sleep').click(function(){
        $('.win').css('opacity','0.8');
        $('.win').css('transform','scale(1)');
    });
    $('.basic').click(function(){
        $('.lose').css('opacity','0.8');
        $('.lose').css('transform','scale(1)');
    });
});
jQuery(window).resize(function(){
	
});
