 $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 3,
                loop: true,
                margin: 0,
                autoplay: true,
				nav:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [3000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
			  var bgSize = function(){
				var h = $(window).height();
				$('#top.fp').css('height', h);
				$('header .content').css('top', h/2 - 100);
				};
				setInterval(bgSize, 100);
			
			$("a.topBtn").click(function() {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top - 10 +  "px" 
			}, {
				duration: 1000,
				easing: "swing"
			});
				return false;
			});
(function($) {
  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay = $('.overlay'),
      liIndex,
      targetImg;
  
  //preload images
  var imgSources = [
  'images/img-1-lg.jpg',
  'images/img-2-lg.jpg',
  'images/img-3-lg.jpg',
  'images/img-4-lg.jpg',
  'images/img-5-lg.jpg',
  'images/img-6-lg.jpg',
  'images/img-7-lg.jpg',
  'images/img-8-lg.jpg',
  'images/img-9-lg.jpg',
  'images/img-10-lg.jpg'
  ];

  var imgs = [];
  for (var i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }

  function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
  }

  function getHref(index) {
    return $li.eq(index).find('>a').attr('href');
  }

  function closeLigtbox() {
    $lightbox.fadeOut();
  }

  $overlay.click(closeLigtbox);

  $links.click(function(e) {
    e.preventDefault();
    targetImg = $(this).attr('href');
    liIndex = $(this).parent().index();
    replaceImg(targetImg);
    $lightbox.fadeIn();
  });

   $next.click( function() {  
    if ( (liIndex + 1) < $li.length ) { 
      targetImg = getHref(liIndex + 1);
      liIndex ++;
    } else {
      targetImg = getHref(0);
      liIndex = 0;
    }
    replaceImg(targetImg);
  });

   $prev.click( function() {  
    if ( (liIndex) > 0 ) { 
      targetImg = getHref(liIndex - 1);
      liIndex --;
    } else {
      targetImg = getHref($li.length - 1);
      liIndex = $li.length - 1;
    }
    replaceImg(targetImg);
  });
  
})(jQuery);
		



		})
			
			
			
			
			