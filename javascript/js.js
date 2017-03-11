window.onload = function(){
    var $anchor1 = $('#about').offset();
    var $anchor2 = $('#creative').offset();
    var $anchor3 = $('#dev').offset();
    var $lastVisited = $('#a');

	$("nav ul").find('a').click(function() {
		var $href = $(this).attr('href');
        var $anchor;

    	$("#c").html("<h3>//creative <img class='blink' src='images/blink.gif'/></h3>");
    	$("#d").html("<h3>//developer <img class='blink' src='images/blink.gif'/></h3>");
    	if($href == "#about") { $anchor = $anchor1; 
            if(!$(this).is($lastVisited)){
                $(function() {
                    $('#comments').fadeOut(500, function() {
                       $(this).html("<p>/*</p><p>&copy; uyenvo</p><p>+1 (817) 374-0039</p><p>texas a&m 2018</p><p><a id='email' href='mailto:uyend.vo@gmail.com'>uyend.vo@gmail.com</a></p><p>*/</p>").fadeIn(500);
                    });
                });
                $lastVisited = $(this);
            }

        }

    	if($href == "#creative") { $anchor = $anchor2; $(this).html("<h3>creative <img class='blink' src='images/blink.gif'/></h3>"); 
            if(!$(this).is($lastVisited)){
                $(function() {
                    $('#comments').fadeOut(500, function() {
                       $(this).html("<p>/*</p><p>*</p><p>design is not</p><p>just what it looks like</p><p>*</p><p>*/</p>").fadeIn(500);
                    });
                });
                $lastVisited = $(this);
            }
        }

    	if($href == "#dev") { $anchor = $anchor3; $(this).html("<h3>developer <img class='blink' src='images/blink.gif'/></h3>");  
            if(!$(this).is($lastVisited)){
                $(function() {
                    $('#comments').fadeOut(500, function() {
                       $(this).html("<p>/*</p><p>*</p><p>design is</p><p>how it works</p><p>*</p><p>*/</p>").fadeIn(500);
                    });
                });
                $lastVisited = $(this);
            }
        }

   		$('.maincontent').animate({ scrollTop: $anchor.top }, 900);
    	return false;
	});

};
