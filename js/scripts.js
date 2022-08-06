/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

class YoutubeChannel {
    constructor(channelName, url, image, subscriberCount, videoCount) {
        this.channelName = channelName;
        this.url = url;
        this.image = image;
        this.subscriberCount = subscriberCount;
        this.videoCount = videoCount;        
    }
}

const channels = [new YoutubeChannel("Amigoscode", "https://www.youtube.com/c/amigoscode",  "./assets/img/amigoscode.jpg", "385K", "237"),
                  new YoutubeChannel("Code Decode", "https://www.youtube.com/c/CodeDecode", "./assets/img/codedecode.jpg","64.6K", "173"),
                  new YoutubeChannel("Derek Banas", "https://www.youtube.com/c/derekbanas", "./assets/img/derekbanas.jpg", "1.19M", "1,222"),
                  new YoutubeChannel("Java Code Geeks", "https://www.youtube.com/channel/UCxoUc7Rar2q90Gu0nT2ffuQ", "./assets/img/javacodegeeks.jpg", "16.7K", "107"),
                  new YoutubeChannel("Leila Gharani", "https://www.youtube.com/c/LeilaGharani", "./assets/img/leilagharani.jpg", "1.82M", "454"),
                  new YoutubeChannel("MIT OpenCourseWare", "https://www.youtube.com/c/mitocw", "./assets/img/mitopencourseware.jpg", "4.02M", "6,788"),
                  new YoutubeChannel("NeetCode", "https://www.youtube.com/c/NeetCode", "./assets/img/neetcode.jpg", "196K", "326"),
                  new YoutubeChannel("Programming with Mosh", "https://www.youtube.com/c/programmingwithmosh", "./assets/img/mosh.jpg", "2.66M", "170"),
                  new YoutubeChannel("Selenium Express", "https://www.youtube.com/c/SeleniumExpress", "./assets/img/selenium.jpg", "72K", "152"),
                  new YoutubeChannel("SpringDeveloper", "https://www.youtube.com/user/SpringSourceDev", "./assets/img/springdeveloper.jpg", "175K",   "1,109"),
                  new YoutubeChannel("TechWorld with Nana", "https://www.youtube.com/c/TechWorldwithNana", "./assets/img/nana.jpg", "588K", "97"),
                  new YoutubeChannel("freeCodeCamp.org","https://www.youtube.com/c/Freecodecamp", "./assets/img/freecodecamp.jpg", "6.02M", "1,332")];

function createDot(isActive) {
    let li = document.createElement("li");
    if(isActive) {
        li.setAttribute("class", "dot active");
    } else {
        li.setAttribute("class", "dot");
    }
    return li;
}

function createIndicators() {
    const carousel = document.getElementById("carousel");
    for(let i = 0; i < channels.length; i++) {
        carousel.appendChild(createDot(i < 3));
    }
}                  

const buttons = {
	prev: document.getElementById("previousCard"),
    next: document.getElementById("nextCard"),
};

buttons.next.addEventListener("click", () => rotateCards("right"));
buttons.prev.addEventListener("click", () => rotateCards("left"));

const cardList = document.querySelector(".cardList");
let index = 0;

function rotateCards(direction) {
    
    if (direction === "right") index++;
    if (direction === "left") index--;

    //update left
    updateCard(index, "prevImageURL", "prevChannelName", "prevChannelURL", "prevSubCount", "prevVidCount");
    //update center
    updateCard(index + 1, "currImageURL", "currChannelName", "currChannelURL", "currSubCount", "currVidCount");
    //update right
    updateCard(index + 2, "nextImageURL", "nextChannelName", "nextChannelURL", "nextSubCount", "nextVidCount");

    updateCarousel(index, direction);

}

function updateCarousel(index, direction) {
    carousel = document.getElementById("carousel");
    dots = carousel.getElementsByTagName("li");
    
    if (direction === "right") { removeActiveIndicator(index-1); } 
    else if (direction === "left") { removeActiveIndicator(index+3);}

    for(let i = 0; i < 3; i++) {
        setActiveIndicator(index + i, dots);
    }
}

function setActiveIndicator(index, dots) {
    i = index.mod(channels.length);
    dots.item(i).setAttribute("class", "dot active");
}

function removeActiveIndicator(index) {
    dots.item(index.mod(channels.length)).setAttribute("class", "dot");
}


function updateCard(index, imageID, channelID, urlID, subCountID, vidCountID) {
    i = index.mod(channels.length);
    //channel name
    document.getElementById(channelID).textContent = channels[i].channelName;
    //channel URL
    document.getElementById(urlID).action = channels[i].url;
    //channel image
    document.getElementById(imageID).src = channels[i].image
    //subscriber count
    document.getElementById(subCountID).innerHTML = channels[i].subscriberCount + "<br><span>subscribers</span>";
    //video count
    document.getElementById(vidCountID).innerHTML = channels[i].videoCount + "<br><span>videos</span>"
}

Number.prototype.mod = function(n) {
    return ((this%n) + n) % n;
}