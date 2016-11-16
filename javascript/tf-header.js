var menuBtn = document.querySelector("#tf-app-header-menu-btn");
menuBtn.addEventListener('click', function(){
	var chkStatus = document.querySelector('#navFooter input'); 
	var navbar = document.querySelector('.navBar');
	
	if(chkStatus.checked){
		
		if(navbar.classList.contains('navBar--width-small')){
			setTimeout(function(){ 
				navbar.classList.remove('navBar--width-small');
				navbar.classList.add('navBar--width-medium');
			}, 100);		
		}else{
			setTimeout(function(){ 
				navbar.classList.remove('navBar--width-medium');
				navbar.classList.add('navBar--width-small');
			}, 100);		
		}
		
	}else{
		
		if(navbar.classList.contains('navHide')){
			setTimeout(function(){ 
				navbar.classList.remove('navHide');
				navbar.classList.remove('navBar--width-small');
				navbar.classList.add('navBar--width-medium');
			}, 100);	
		}else{
			navbar.classList.add('navHide');
		}
		
	}
	
});
