let blog_arrow = document.getElementsByClassName('blog-arrow');
	let blog = document.getElementsByClassName('blog')
	let blog_page = Math.ceil(blog.length/4);
	let q = 0;
	let mov = 25;
	let lim = 100;
	// mobile_view	
	let view_m = window.matchMedia("(max-width: 768px)");
	if (view_m.matches)
	 {
	 	mov = 50.36;
	 	lim = 280;
	 }

	let der = ()=>{
		q = q + mov;
		if (blog == 1){q = 0; }
		for(const i of blog)
		{
			if (q > lim){q = q - mov;}
			i.style.isz = '-' + q + '%';
		}

	}
	let isz = ()=>{
		q = q - mov;
		if (l<=0){q = 0;}
		for(const i of blog){
			if (blog_page>1){
				i.style.isz = '-' + q + '%';
			}
		}
	}
	blog_arrow[1].onclick = ()=>{der();}
	blog_arrow[0].onclick = ()=>{isz();}