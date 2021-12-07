const open_logining_profile_menu = document.querySelector('.open-logining-profile-menu');
const open_profile_menu = document.querySelector('.open-profile-menu');

open_logining_profile_menu.addEventListener('click' ,(e) => {
    open_profile_menu.classList.toggle("active")
})