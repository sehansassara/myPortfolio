
 let circleBars = document.querySelectorAll(".circular-bar");
    let percentValues = document.querySelectorAll(".percent");

    let finalValues = [70, 85, 60, 90, 10, 90, 95, 90, 85, 92];

    let speed = 20;


    circleBars.forEach((circleBar, index) => {
    let InitialValue = 0;
    let finalValue = finalValues[index];
    let percentValue = percentValues[index];

    let timer = setInterval(() => {
    InitialValue += 1;

    let degree = (InitialValue / 100) * 360;

    circleBar.style.background = `conic-gradient(#6ef442 ${degree}deg, #e8f0f7 0deg)`;

    percentValue.innerHTML = InitialValue + "%";


    if (InitialValue >= finalValue) {
    clearInterval(timer);
}
}, speed);
});


    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });


    document.querySelectorAll('.container').forEach(container => {
        observer.observe(container);
    });


    let btn = document.querySelector("#download");
    btn.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX * 3 - rect.left;
        btn.style.setProperty('--x',x + 'deg');
    });





    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let projectDom = document.querySelector( '.proSec');
    let slideItemDom = document.querySelector('.proSec .slide');
    let thumbnailDom = document.querySelector('.proSec .thumbnail');


    nextDom.onclick = function (){
        showSlider('next');
    }

    prevDom.onclick = function () {
        showSlider('prev');
    }

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;

    let runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type){
        let itemSlider = document.querySelectorAll('.proSec .slide .item');
        let itemThumbnail = document.querySelectorAll('.proSec .thumbnail .item');

        if (type === 'next'){
            slideItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0])
            projectDom.classList.add('next');
        }else {
            let positionLastItem = itemSlider.length - 1;
            slideItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            projectDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                projectDom.classList.remove('next');
                projectDom.classList.remove('perv');
            }, timeRunning);

        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }



    /*const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });*/

 const menuIcon = document.getElementById('menu-icon');
 const nav = document.getElementById('nav');

 menuIcon.addEventListener('click', () => {
     nav.classList.toggle('active');
     // Toggle aria-expanded for accessibility
     const isExpanded = nav.classList.contains('active');
     menuIcon.setAttribute('aria-expanded', isExpanded);
 });

 document.addEventListener('click', (event) => {
     if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
         nav.classList.remove('active');
         menuIcon.setAttribute('aria-expanded', false);
     }
 });