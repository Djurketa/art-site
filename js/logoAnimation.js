document.querySelector(".main-wrapper")
		.addEventListener("mousemove", (e)=> {
		const logo = document.querySelector('.logo');	
		let p1 = {
				x:screen.width/2,
				y: 0
			};
		let p2 = {
				x: e.clientX,
				y: e.clientY
			};
		// angle in degrees
		let angleDeg = parseInt(Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI);	
			if (angleDeg>90) {
				logo.style.transform = `rotate(${angleDeg-180}deg)`;
			}else{
				logo.style.transform = `rotateY(180deg)rotate(${-angleDeg}deg)`;
				logo.style.transition = '0.1s';
			}	
});
		

document.querySelector(".main-wrapper")
		.addEventListener("mouseleave", (e)=> {
  			document.querySelector('.logo')
  					.style.transform = 'rotateY(0deg)rotate(0deg)' 
});
document.querySelector('.logo').addEventListener("click", (e)=> {
  		document.querySelector('.logo').style.transform += ' rotate(30deg)'


});

	
