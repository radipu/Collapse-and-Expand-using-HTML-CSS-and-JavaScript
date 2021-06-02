var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
  			coll[i].addEventListener("click", function() {
			for(j = 0; j < coll.length; j++){
				coll[j].classList.remove("active");
			}
    		this.classList.toggle("active");
    		
    		// if (content.style.maxHeight){
      		// 	content.style.maxHeight = null;
    		// }
			// else {
      		// 	content.style.maxHeight = content.scrollHeight + "px";
    		// }
  			});
		}
		
