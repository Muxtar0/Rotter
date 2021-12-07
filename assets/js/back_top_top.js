const back_to_top_btn = document.getElementById('back_to_top_btn');

back_to_top_btn.addEventListener('click' , (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});