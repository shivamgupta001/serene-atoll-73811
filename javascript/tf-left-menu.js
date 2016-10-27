/*$(document).ready(function(){
			$(".navBarMain .navAnchorRight").each(function(index , value){
				if($(value).find("ul").length && !($(value).find("ul").children().length)){
					$(value).removeClass("navAnchorRight");
				}
			});
			
			$("li.navReports ul.navDropDownContent ").each(function(){
				var newUl = this.cloneNode(true);
				var sortedNodes  = $(newUl).children().sort(function(first,sec){
										var a = first.firstElementChild.text.toLowerCase();
										var b = sec.firstElementChild.text.toLowerCase();
										if( a > b)
											return 1;
										else if(a < b)
												return -1;
										else return 0;
									});
				
				if(sortedNodes.length > 0){
					$(this).empty();
					$(this).append(sortedNodes);
				}
			});
			
		});*/

var navFooter = document.getElementById("navFooter");
navFooter.addEventListener('click', function(){
	var navBar = document.querySelector('.navBar');
	navBar.classList.add('navBar--width-medium');
	navBar.classList.remove('navBar--width-small');
	
	
});