function showAlbum(val,val2){
	
	document.querySelector(`#${val}`).addEventListener('click', show)
	
	function show(){	
		var album = document.querySelector('.image-container').children;
		for(i=0;i<album.length;i++){
			album[i].style.backgroundImage = 
				`url(images/${val}/IMAG${i+1}.jpg)`;
			album[i].style.boxShadow=`0px 0px 20px 1px ${val2}`	
		}
	}
}
showAlbum('rb','black')
showAlbum('inck','darkred')
showAlbum('pirography')
showAlbum('graffit','#420315')
showAlbum('aquarel','#420315')






