document.addEventListener('DOMContentLoaded', function(){
    loadAll();
})


function loadAll(){
    let menu = document.querySelector('.menu');
    let x = window.matchMedia("(max-width: 768px)");


    document.addEventListener('scroll', function(){
        if (!x.matches){ // if viewport greater than 768 pixels
            // then change navbar color on scroll
            if (document.documentElement.scrollTop > 30){
                menu.classList.add('dark-theme');
            }else{
                menu.classList.remove('dark-theme');
            }
        } // else keep navbar color constant
    });



    // for my navbar
    let hamburger = document.querySelector('.hamburger');
    let menuOverlay = document.querySelector('.menu-overlay');
    let menuMain = document.querySelector('.menu-main');


    window.addEventListener('resize', function(){
        if (this.innerWidth >= 768 && hamburger.classList.contains('change-to-close')){
            menuMain.classList.remove('small-scr');
            menuOverlay.classList.remove('small-scr');
            hamburger.classList.remove('change-to-close');
            document.body.style.overflowY = 'auto';
        }
    });

    hamburger.addEventListener('click', function(){
        if (this.classList.contains('change-to-close')){ // to change the hamburger to default and hidden navbar
            menuMain.classList.remove('small-scr');
            menuOverlay.classList.remove('small-scr');
            this.classList.remove('change-to-close');
            document.body.style.overflowY = 'auto';
        }else{
            this.classList.add('change-to-close');
            menuMain.classList.add('small-scr');
            menuOverlay.classList.add('small-scr');
            document.body.style.overflowY = 'hidden';
        }

        window.addEventListener('click', function(e){
            if (e.target === document.querySelector('.menu-overlay')){
                hamburger.classList.remove('change-to-close');
                menuMain.classList.remove('small-scr');
                menuOverlay.classList.remove('small-scr');
                document.body.style.overflowY = 'auto';
                // menuMain.style.opacity = '.5';
            }
        });
    });

}

