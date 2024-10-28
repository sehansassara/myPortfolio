let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let mountain_front = document.getElementById('mountains_front');
let btnexplore = document.getElementById('btnexplore');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log("Scroll value:", value);  // Check if scroll event is firing
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountain_behind.style.top = value * 0.8 + 'px';
    mountain_front.style.top = value * 2 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btnexplore.style.marginTop = value * 1.8 + 'px';
});


