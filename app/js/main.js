function multiBrowserTransform(selector, value){
	var contentsElement = $(selector);
	contentsElement.css("-webkit-transform",value);
	contentsElement.css("-moz-transform",value);
	contentsElement.css("-ms-transform",value);
	contentsElement.css("-o-transform",value);
	contentsElement.css("transform",value);	
}

$(document).ready(function() {

	//Check Mobile + iPad
	window.mobilecheck = function() {
		var check = false;
		(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
	var isMobile = window.mobilecheck();
	var isMenuOpened = false;

	var sectionFromTop = 0;

	//Setup Sections
	var isInitComplete = false;
	var initialSection = 0;
	var currentSection = initialSection;
	// var sectionTitles =["Block Master","Portal","Contact","Helloworld"];
	var sectionTitles =["Block Master","Portal"];
	var sectionDescriptions =["","Comming soon.."];
	var numOfSections = sectionTitles.length;

	var sectionBackgroundColors = ['#F9F9F9','#666666'];
	var sectionFontColors = ['#666666','#F9F9F9'];

	function updateHeaderWithAnimation(title, backgroundColor, fontColor){
		var target = $("#header");
		target.toggleClass("move-up");
		setTimeout(function(){
			target.find('.header-label').text(title);
			target.css("background-color",backgroundColor);
			target.css("color",fontColor);
			target.toggleClass("move-up");
			if(isMenuOpened){
				$('.header-menu-icon-open').hide();
				$('.header-menu-icon-close').show();
			}else{
				$('.header-menu-icon-open').show();
				$('.header-menu-icon-close').hide();
			}
		}, 800);
	}
	function blinkElement(selector, onFadeOutComplete){
		var target = $(selector);
		target.fadeOut(400, function(){ 
			if(onFadeOutComplete){
				onFadeOutComplete();
			}
			target.fadeIn(1000); 
		});
	}
	function updateHeaderWithSection(section){

		var previousSection = section - 1;
		if(previousSection < 0){
			previousSection = numOfSections - 1; //Last
		}

		var headerText = sectionTitles[section];
		var headerBackgroundColor = sectionBackgroundColors[previousSection]
        var headerFontColor = sectionFontColors[previousSection]

        updateHeaderWithAnimation(headerText, headerBackgroundColor, headerFontColor);
	}
	function updateFooterWithSection(section){

        var resourceIndex = section

        var footerFontColor = sectionFontColors[resourceIndex];
        blinkElement('#footer', function(){
        	var footerElement = $('#footer');
        	footerElement.css("color", footerFontColor);
        });
	}
	function sectionOnLoad(index){
		currentSection = index;

		var sectionElement = $('#section'+index);
		setTimeout(function(){
			sectionElement.find(".section-desc-box").animate({
			    opacity: 1
			}, 500);
		},1500)
		sectionElement.find(".animation-box").show();
		//TODO: Lang & Animation
	}
	$('#fullpage').fullpage({
		sectionsColor: sectionBackgroundColors,
		css3: true,
		continuousVertical: true,
		navigation: true,
		resize: false,
		onLeave: function(index, nextIndex, direction){
			//index starts from 1
			index--;
			nextIndex--;

			updateHeaderWithSection(nextIndex);
			updateFooterWithSection(nextIndex);

			var sectionElement = $('#section'+index);
			sectionElement.find(".section-desc-box").animate({
			    opacity: 0
			}, 1000);
			sectionElement.find(".animation-box").hide();
		},
		afterLoad: function(anchorLink, index){
			index --; //index starts from 1
            sectionOnLoad(index);
        }
	})
	$('.sectionDownTabHolder').each(function(index){
		var sectionObject = $('#section'+index);

		var sectionDownTab =  sectionObject.find('.sectionDownTab')
		var sectionDownBottomRightCorner = sectionObject.find('.sectionDownBottomRightCorner');
		var sectionDownBottomRightCornerInverse = sectionObject.find('.sectionDownBottomRightCornerInverse');

		var nextSectionIndex = index + 1;
		if(nextSectionIndex == numOfSections){
			nextSectionIndex = 0;
		}
		sectionDownTab.css( "background-color", sectionBackgroundColors[nextSectionIndex]) //Next section background
		sectionDownBottomRightCorner.css( "background-color", sectionBackgroundColors[nextSectionIndex]) //Same as tab
		sectionDownBottomRightCornerInverse.css( "background-color", sectionBackgroundColors[index]) //Background

		sectionDownTab.css( "color", sectionFontColors[nextSectionIndex])
		sectionDownTab.click(function(e){
			e.stopPropagation();
			$.fn.fullpage.moveSectionDown();	
		})
		sectionDownTab.find(".sectionDownTabText").text("#"+sectionTitles[nextSectionIndex]);
	})
	$('#footer').click(function (e){
		e.stopPropagation();
		$.fn.fullpage.moveSectionDown();
	})

	//Setup Menu
	function toggleMenu(){
		$.fn.fullpage.setAllowScrolling(isMenuOpened);
		isMenuOpened = !isMenuOpened;
		//Move in/out
		if(isMenuOpened){
			updateHeaderWithAnimation("Nemotoo", "#568D8A", "#FFF");
			$('#footer').hide();
			multiBrowserTransform('#section'+currentSection, "scale(0.6)");
			$('.sectionDownTabHolder').hide();	
		}else{
			updateHeaderWithSection(currentSection);
			$('#footer').show();
			multiBrowserTransform('#section'+currentSection, "scale(1)");
			$('.sectionDownTabHolder').show();
		}
		//Show Nav
		$('#main-nav').toggleClass("is-visible");
	}
	$('#header').on('click', function(event){
		event.preventDefault();
		toggleMenu();
	});
	//Custom section style
	for (var i = 0; i < numOfSections; i++) {
		var section = $('#section'+i);
		var sectionDescLabel = section.find('.section-desc-label');
		sectionDescLabel.css("color",sectionFontColors[i]);
		sectionDescLabel.text(sectionDescriptions[i]);
	}
	setTimeout(function(){
	//TODO : Routing
		updateHeaderWithSection(initialSection);
		updateFooterWithSection(initialSection);
		sectionOnLoad(initialSection);
	},0);	
})