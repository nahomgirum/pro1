let  menu =document.querySelector('#menu-bar');
let  navbar =document.querySelector('.navbar');
let  videobtn =document.querySelectorAll('.vid-btn');




window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 

};


menu.addEventListener('click' , () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

videobtn.forEach(btn =>{

     btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        
     });
});