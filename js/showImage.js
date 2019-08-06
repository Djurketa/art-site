document.querySelector(".image-container")
		.addEventListener('click', 

		function(e){
		
		const imageBack = document.querySelector('.image-back')
		const img = document.querySelector('img')
		var x = e.target;
			if (x.className === 'image-container'){
				return
			}
			style = x.currentStyle || window.getComputedStyle(x, false),
			bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
			
			imageBack.style.display = 'block'
			
			
			img.setAttribute('src',bi)
			window.scrollTo(0, 0);

		});
// Close Image
document.querySelector(".image-back")
		.addEventListener('click', function(){
			this.style.display = 'none'
			console.log(this)
		});
