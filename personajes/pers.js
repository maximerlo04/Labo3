	window.onscroll = function() {
    	const flecha = document.getElementById("flecha-arriba");
   		if (document.documentElement.scrollTop > 200) {
        	flecha.style.display = "block";
    	} else {
        	flecha.style.display = "none";
    	}
		};

		function desplazarArriba() {
    	window.scrollTo({ top: 0, behavior: 'smooth' });
	}