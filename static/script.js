var menu_btn = document.querySelector(".dy-menu-button");
var active_elements = document.querySelectorAll(".active-element");
var toggled_menu = menu_btn.addEventListener("click", function(){
	for (var ele_ind = 0; ele_ind < active_elements.length; ++ele_ind){
		var curr_element = active_elements[ele_ind];
		curr_element.classList.toggle("activated");
	}
});