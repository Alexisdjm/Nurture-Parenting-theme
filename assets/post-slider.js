let post_arrow = document.getElementsByClassName('post-arrow');
	let post = document.getElementsByClassName('post')
	let post_page = Math.ceil(post.length/4);
	let k = 0;
	let movimiento = 30;
	let limite = 180;
	// mobile_view	
	let view_mobile = window.matchMedia("(max-width: 768px)");
	if (view_mobile.matches)
	 {
	 	movimiento = 50.36;
	 	limite = 373;
	 }

	let right = ()=>{
		k = k + movimiento;
		if (post == 1){k = 0; }
		for(const i of post)
		{
			if (k > limite){k = k - movimiento;}
			i.style.left = '-' + k + '%';
		}

	}
	let left = ()=>{
		k = k - movimiento;
		if (l<=0){k = 0;}
		for(const i of post){
			if (post_page>1){
				i.style.left = '-' + k + '%';
			}
		}
	}
	post_arrow[1].onclick = ()=>{right();}
	post_arrow[0].onclick = ()=>{left();}