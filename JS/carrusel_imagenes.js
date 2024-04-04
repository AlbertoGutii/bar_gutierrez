window.onload = principal;

function principal()
{   
    let slideIndex = 0;

    let ocultar = document.getElementsByClassName('slide');
        console.log(slideIndex);

        for(let i = 1; i <ocultar.length; i++) {
            ocultar[i].style.display = "none";
        }

    let miIntervalo = setInterval(function() {
        let slides = document.getElementsByClassName('slide');
        console.log(slideIndex);

        for(let i = 0; i <slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        if(slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        slides[slideIndex].style.display = "flex";
        slideIndex++;
        console.log(slideIndex);
    },3000);
}

