console.log('test');
var expositieContainer = document.querySelector('#expositie-container');
var lofiExpositie = document.querySelector('#lofi-expositie');
var mefiExpositie = document.querySelector('#mefi-expositie');
var lofiButton = document.querySelector('#lofiButton');
var mefiButton = document.querySelector('#mefiButton');
var hifiButton = document.querySelector('#hifiButton');

function showLofi() {
    expositieContainer.style.display = "none";
    mefiExpositie.style.display = "none";
    lofiExpositie.style.display = "flex";
}

function mefiShow() {
    expositieContainer.style.display = "none";
    lofiExpositie.style.display = "none";
    mefiExpositie.style.display = "flex";
}

function hifiShow() {
    lofiExpositie.style.display = "none";
    mefiExpositie.style.display = "none";
    expositieContainer.style.display = "flex";
}

lofiButton.addEventListener('click', showLofi);
mefiButton.addEventListener('click', mefiShow);
hifiButton.addEventListener('click', hifiShow);