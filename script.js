const body = document.querySelector('body');
const payWallBackground = document.querySelector('.pay-wall-background')
const subscriptionForm = document.querySelector('.subscribe-form')

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

const seconds = 5

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

body.onload = function(){

    //console.log(payWallBackground.display)
    //subscriptionForm.display = 'none' 
    //payWallBackground.display = 'none'
    
   

    setTimeout(function(){ 

        subscriptionForm.classList.add("active")
        payWallBackground.classList.add("active")

        disableScroll(); 
        console.log("pay wall actived"); 

    }, seconds * 1000);

    setTimeout(function(){ 

        let response = prompt('Psst!, this is your paywall blocker. Would you like to escape this annoying paywall?', 'Yes');

        if (response.toLowerCase() == 'yes'){
            subscriptionForm.classList.remove("active")
            payWallBackground.classList.remove("active")
    
            payWallBackground.remove()
            enableScroll(); 
            console.log("pay wall disabled"); 
        }

    }, (seconds * 2) * 1000);
    
}

btnHam.addEventListener('click', function(){

    if (btnHam.className !== ""){

        btnHam.style.display = 'none';
        btnTimes.style.display = 'block';
        navBar.classList.add('show-nav');

    }

})

btnTimes.addEventListener('click', function(){

    if (btnTimes.className !== ""){

        btnHam.style.display = 'block';
        btnTimes.style.display = 'none';
        navBar.classList.remove('show-nav');

    }
})