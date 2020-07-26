let button = document.querySelector('button');
let popupWrapper = document.querySelector('.popup-wrapper');
let popupClose = document.querySelector('.popup-close');

button.addEventListener('click',()=>{
    popupWrapper.style.display= 'block';
})

popupClose.addEventListener('click',()=>{
    popupWrapper.style.display= 'none';
})

popupWrapper.addEventListener('click',()=>{
    popupWrapper.style.display= 'none';
})