$(document).ready(function() {
	var sectionNames = ['main', 'portal', 'giantshield'];
	var sectionColors = ['#C63D0F', '#1BBC9B', '#7E8F7C'];
	$('#fullpage').fullpage({
		anchors: sectionNames,
		sectionsColor: sectionColors,
		css3: true
	});
	$('#toSection1').css( "background-color", sectionColors[1]);
	$('#toSection1').attr("href","#"+sectionNames[1]);
	$('#toSection2').css( "background-color", sectionColors[2]);
	$('#toSection2').attr("href","#"+sectionNames[2]);

	var resizeId;
	function updateLayout(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		var windowSize = windowHeight;
		//Flow Layout
		var isPortrait = false;
		if(windowWidth < windowHeight){
			isPortrait = true;
			windowSize = windowWidth;
		}
		$('.leftBox').toggleClass('forceFullWidth',isPortrait); //Portrait -> Full width


		//Multi Res
		var isHighRes = (windowHeight > 768);
		var resFactor = (isHighRes)? 1.5 : 1;
		
		var svgBannerHeight = 50 * resFactor;
		if(isPortrait){
			svgBannerHeight *= 1.2;
		}
		$('.svgBanner').css("height", svgBannerHeight + "px");
		$(".sectionDownArrow").css("height", 44 * resFactor + "px");
		$(".sectionDownArrow").css("line-height", 44 * resFactor + "px");
		$(".sectionDownArrow").css("font-size", 1.5 * resFactor + "em");
		
		
	}
	updateLayout(); //Update Layout
	$(window).resize(function() {
	    clearTimeout(resizeId);
	    resizeId = setTimeout(updateLayout, 500);
	});
	$(window).on("orientationchange",function(){
		updateLayout();
	});
});