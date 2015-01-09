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

		var toggleForceFullWidth = false;
		if(windowWidth < windowHeight){
			toggleForceFullWidth = true;
			// alert("Force Full Width - true");
		}else{
			// alert("Force Full Width - false");
		}
		$('.leftBox').toggleClass('forceFullWidth',toggleForceFullWidth);
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