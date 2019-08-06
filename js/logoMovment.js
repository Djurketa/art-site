document.querySelector(".main-wrapper")
		.addEventListener("mousemove",logoFollow)
document.querySelector(".main-wrapper").addEventListener("mouseleave", (e)=> {
  logoOut(e);
});
function logoFollow(e) {
	const logo = document.querySelector('.logo');
 	let x = e.clientX;
	
	function transform(val1 ,val2){
		logo.style.transform = `rotateY(${val1}deg)rotate(${val2}deg)`
		logo.style.transition = '.4s'
	}
	
	if(x<screen.width/4){
		transform(0,-25)

	}else if (x>=screen.width/4 && x<screen.width/2 ) {
		transform(0,-40)
		
	}else if (x>=screen.width/2 && x<screen.width/4*3) {
		transform(180,-45)
		
	}else if(x>screen.width/4*3){
		transform(180,-30)
	}

}
function logoOut(e) {
 document.querySelector('.logo').style.transform = 'rotateY(0deg)rotate(0deg)' 
}


