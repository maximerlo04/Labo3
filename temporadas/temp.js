function toggleMenu() {
    var seasons = document.getElementById("temporadas");
    seasons.classList.toggle("open");
}

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

document.getElementById('rayitas').onclick = function() {
    var navList = document.getElementById('nav');
    var content = document.getElementById('content');
    var nav = document.querySelector('nav');

    navList.classList.toggle('show'); 

   
    if (navList.classList.contains('show')) {
        nav.style.height = '300px'; 
    } else {
        nav.style.height = '100px'; 
    }
    
    content.classList.toggle('move-down'); 
};