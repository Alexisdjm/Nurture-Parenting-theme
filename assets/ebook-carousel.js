let arrow = document.getElementsByClassName('ebook-arrow');
	let ebook = document.getElementsByClassName('ebook')
	let ebook_page = Math.ceil(ebook.length/4);
	let a = 0;
	let movement = 40;
	let limitmove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movement = 50.36;
	 	limitmove = 504;
	 }

	let right_mover = ()=>{
		a = a + movement;
		if (ebook == 1){a = 0; }
		for(const i of ebook)
		{
			if (a > limitmove){a = a - movement;}
			i.style.left = '-' + a + '%';
		}

	}
	let left_mover = ()=>{
		a = a - movement;
		if (l<=0){a = 0;}
		for(const i of ebook){
			if (ebook_page>1){
				i.style.left = '-' + a + '%';
			}
		}
	}
	arrow[1].onclick = ()=>{right_mover();}
	arrow[0].onclick = ()=>{left_mover();}