var rightMenuListToggleBtn = document.querySelector('#tf-app-body-right-menu-list-toggle');
rightMenuListToggleBtn.addEventListener('click', function(){
	var rightMenu = document.querySelector('#tf-app-body-right-menu');
	rightMenu.classList.toggle('tf-app-body-right-menu--width');
});