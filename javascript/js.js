window.onload = function(){
    var $anchor1 = $('#about').offset();
    var $anchor2 = $('#creative').offset();
    var $anchor3 = $('#dev').offset();
	
	$("nav ul").find('a').click(function() {
		var $href = $(this).attr('href');
    	var $anchor;
    	$("#c").html("//creative");
    	$("#d").html("//developer");
    	if($href == "#about") { $anchor = $anchor1; }
    	if($href == "#creative") { $anchor = $anchor2; $(this).text("creative"); }
    	if($href == "#dev") { $anchor = $anchor3; $(this).text("developer");}

   		$('.maincontent').animate({ scrollTop: $anchor.top }, 'slow');
    	return false;
	});

};