/* Left side Mobile Menu*/
	var $menu = $("#menu").mmenu({
	//   options
	extensions  : [ 'effect-slide-menu', 'pageshadow', "pagedim-black" ],
	searchfield : false,

	offCanvas: {
	  zposition: "front"
	},
	navbar: {
	  title: "পেপারস"
	},
	});

	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
	 API.open();
	});

	API.bind( "opened", function() {
	 setTimeout(function() {
	    $icon.addClass( "is-active" );
	 }, 100);
	});
	API.bind( "closed", function() {
	 setTimeout(function() {
	    $icon.removeClass( "is-active" );
	 }, 100);
	});
/* End of left side Mobile Menu*/

/* Search Activity and Animation*/
$(".search").on("click", function(){
  if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
     $(this).attr('data-toggled','on');
     $(".search-bar-container").show().addClass("animated slideInDown");
     $(".fa-search").hide();
     $(".fa-times").show();
    }
    else if ($(this).attr('data-toggled') == 'on'){
     $(this).attr('data-toggled','off');
     $(".search-bar-container").fadeOut();
     $(".fa-times").hide();
     $(".fa-search").show();
    }
});

/* End Search Activity and Animation*/


/* Comment slide down in single page */
 $(".write-response").click(function () {
	$(this).find('.form-group');
	$('textarea').focus().animate({height: "10em"}, 500);
	$('.comment-place').css({'display': "none"});
	$('.btn-post').show(500);
});
 /* End Comment slide down in single page */

