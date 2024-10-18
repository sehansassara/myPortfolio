
    // Select all circular bars and percentage text elements
    let circleBars = document.querySelectorAll(".circular-bar");
    let percentValues = document.querySelectorAll(".percent");

    // Define the final percentage values for each circular progress bar
    let finalValues = [70, 85, 60, 90, 10, 90, 95, 90, 85, 92]; // These values correspond to the skill percentages

    // Set speed for the animation
    let speed = 20;

    // Loop through each circular bar and animate it
    circleBars.forEach((circleBar, index) => {
    let InitialValue = 0;
    let finalValue = finalValues[index]; // Get the final value for each circle
    let percentValue = percentValues[index]; // Get the corresponding percentage element

    let timer = setInterval(() => {
    InitialValue += 1;

    // Calculate the degree value from the InitialValue (percentage of 360 degrees)
    let degree = (InitialValue / 100) * 360;

    // Update the background style for the circular progress bar
    circleBar.style.background = `conic-gradient(#6ef442 ${degree}deg, #e8f0f7 0deg)`;

    // Update the percentage text
    percentValue.innerHTML = InitialValue + "%";

    // Stop the timer when the final value is reached
    if (InitialValue >= finalValue) {
    clearInterval(timer);
}
}, speed);
});

    // Create an IntersectionObserver to track when elements enter/exit the viewport
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the container enters the viewport
                entry.target.classList.add('visible');
            } else {
                // Remove 'visible' class when the container exits the viewport (for replaying)
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    // Observe all containers with the class '.container'
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



    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the 'active' class on the nav
    });