// javascript wizardry

//Smooth scrolling
jQuery(function($) {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			var topbar = $('.top-bar').height();
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if ( this.hash != '#site-navigation' && $(window).width() > 1024 ) {
				if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top - topbar + 40
				}, 800);
				return false;
				}
			} else {
				if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top
				}, 800);
				return false;
				}
			}
		}
	});
});

//Snap SVG
jQuery(function($) {
  $('#rect-0').velocity({
    y: "0px"
  },{
    duration: 3500,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-1').velocity({
    y: "75px"
  },{
    duration: 4000,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-2').velocity({
    y: "50px"
  },{
    duration: 2500,
    easing: [ .35, 0, .78, 1 ],
    loop: true
  });

  $('#rect-3').velocity({
    y: "140px"
  },{
    duration: 3750,
    easing: [ .42, 0, .6, 1 ],
    loop: true
  });

  $('#rect-4').velocity({
    y: "50px"
  },{
    duration: 3500,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-5').velocity({
    y: "50px"
  },{
    duration: 2000,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-6').velocity({
    y: "50px"
  },{
    duration: 3000,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-7').velocity({
    y: "50px"
  },{
    duration: 4700,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-8').velocity({
    y: "50px"
  },{
    duration: 3200,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-9').velocity({
    y: "120px"
  },{
    duration: 3800,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-10').velocity({
    y: "75px"
  },{
    duration: 5000,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-11').velocity({
    y: "80px"
  },{
    duration: 3000,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-12').velocity({
    y: "100px"
  },{
    duration: 3000,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });

  $('#rect-13').velocity({
    y: "50px"
  },{
    duration: 6000,
    easing: [ .42, 0, .78, 1 ],
    loop: true
  });
});
