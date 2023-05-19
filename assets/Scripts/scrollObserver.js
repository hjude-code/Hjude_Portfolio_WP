let bdy = document.querySelector('body');

window.addEventListener('scroll', (x)=>{
    let scrll = window.pageYOffset;
    if(scrll > 10){
        bdy.classList.add('SCRL');
    }else{
        bdy.classList.remove('SCRL');
    }

    console.log(10);
})