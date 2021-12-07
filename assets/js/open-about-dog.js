const comunication = document.querySelector('#comunication');
const close_about_dog_btn = document.querySelector('#close_about_dog_btn');
const main_content_div = document.querySelector('.main-content-div');

comunication.addEventListener('click' , (e) => {
    main_content_div.classList.add('active')
    
})
close_about_dog_btn.addEventListener('click' , (e) => {
    main_content_div.classList.remove('active')
})