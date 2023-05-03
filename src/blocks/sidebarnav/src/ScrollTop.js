window.addEventListener('load', ()=>{

    const navBlock = document.querySelector('nav.wp-block-create-block-sidebarnav');

    if(navBlock){
        console.log(navBlock);
    
        window.addEventListener('scroll', ()=>{
            console.log(window.pageYOffset);
    
            if(window.pageYOffset > 10){
                navBlock.classList.add('navScroll')
            }else{
                navBlock.classList.remove('navScroll')
            }
        })
    }

});
