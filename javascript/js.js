window.onload = function(){
    var $anchor1 = $('#about').offset();
    var $anchor2 = $('#creative').offset();
    var $anchor3 = $('#dev').offset();
	
	$("nav ul").find('a').click(function() {
		var $href = $(this).attr('href');
    	var $anchor;
    	$("#c").html("<h3>//creative <img class='blink' src='images/blink.gif'/></h3>");
    	$("#d").html("<h3>//developer <img class='blink' src='images/blink.gif'/></h3>");
    	if($href == "#about") { $anchor = $anchor1; }
    	if($href == "#creative") { $anchor = $anchor2; $(this).html("<h3>creative <img class='blink' src='images/blink.gif'/></h3>"); }
    	if($href == "#dev") { $anchor = $anchor3; $(this).html("<h3>developer <img class='blink' src='images/blink.gif'/></h3>"); }

   		$('.maincontent').animate({ scrollTop: $anchor.top }, 'slow');
    	return false;
	});

};
