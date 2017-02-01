window.onload = ()=>{
	$(".accordion").on("shown.bs.collapse", function(e) {
		try
		{
			var $target = $(e.currentTarget);
			var $content = $target.children('.collapse').children('.accordion-body');
			var $page = $('html,body');
			var scrollTop = $(document).scrollTop();
			var pageHeight = $page.height();
			var contentHeight = $content.height();
			var contentTop = $content.offset().top;

			if((contentHeight + (contentTop - scrollTop)) > pageHeight){
				$("html,body").animate({
			        scrollTop: $target.offset().top
			    }, "slow");
			}
		}
		catch(ex)
		{
			console.log(ex);
		}
	});

	$("[data-toggle='collapse']").click(function(){
		$(this).find('i').toggleClass('fa-plus fa-minus')
	});
}