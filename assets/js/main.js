const search_btn = document.querySelectorAll('#search_btn');
const search_input = document.querySelector('#search_input');

for(let i=0 ; i<search_btn.length;i++){
    search_btn[i].addEventListener("click" ,(e) => {
        search_input.classList.toggle('active');
        hamburger.classList.remove('is-active');
        mobile_open_menu.classList.remove('active');
        mobile_open_content_div.classList.remove('active')
    })
}


const Close_Search = document.querySelector('#Close_Search');


Close_Search.addEventListener('click' , (e) => {
    search_input.classList.remove('active');

})

//modals
const register_main_div = document.querySelector('.register-main-div');
const login_main_div = document.querySelector('.login-main-div');
const close_div = document.querySelectorAll('.close-div');
const member_login = document.querySelectorAll('#member_login');
const login_btn = document.querySelectorAll('#login_btn');

for(let i=0 ; i<member_login.length;i++){
    member_login[i].addEventListener('click' , (e) => {
        close_div[1].classList.add('active');
        register_main_div.classList.add('active');

    })
}
for(let i=0 ; i<close_div.length;i++){
    close_div[i].addEventListener('click' ,(e) => {
        login_main_div.classList.remove('active');
        register_main_div.classList.remove('active');
        close_div[i].classList.toggle('active');
    })
}

for(let i=0 ; i<login_btn.length;i++){
    login_btn[i].addEventListener('click' , (e) => {

        login_main_div.classList.toggle('active');
        close_div[2].classList.toggle('active');
    })
}





const hamburger = document.querySelector('.hamburger-manu-icon .hamburger');
const mobile_open_menu = document.querySelector('.mobile-open-menu');
const mobile_open_content_div = document.querySelector('.mobile-open-menu .content');
const header = document.querySelector('.header');

hamburger.addEventListener('click' , (e) => {
    hamburger.classList.toggle('is-active');
    mobile_open_menu.classList.toggle('active');
    mobile_open_content_div.classList.toggle('active')

})

window.addEventListener('scroll' , (e) => {
    if(window.scrollY > 1){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active')
    }
})









