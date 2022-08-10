let arrow = document.getElementsByClassName('ebook-arrow');
	let ebook = document.getElementsByClassName('ebook')
	let ebook_page = Math.ceil(ebook.length/4);
	let a = 0;
	let movement = 70;
	let limitmove = 180;
	// mobile_view	
	let phone_view = window.matchMedia("(max-width: 768px)");
	if (phone_view.matches)
	 {
	 	movement = 50.36;
	 	limitmove = 373;
	 }

	let derecha = ()=>{
		a = a + movement;
		if (ebook == 1){a = 0; }
		for(const i of ebook)
		{
			if (a > limitmove){a = a - movement;}
			i.style.left = '-' + a + '%';
		}

	}
	let izquierda = ()=>{
		a = a - movement;
		if (l<=0){a = 0;}
		for(const i of ebook){
			if (ebook_page>1){
				i.style.left = '-' + a + '%';
			}
		}
	}
	arrow[1].onclick = ()=>{derecha();}
	arrow[0].onclick = ()=>{izquierda();}