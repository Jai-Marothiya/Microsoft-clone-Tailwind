const toggleLeft = document.querySelector('.toggleLeft');
const toggleRight = document.querySelector('.toggleRight');
const toggleRightCircle = document.querySelector('.toggleRightCircle');
const toggleLeftCircle = document.querySelector('.toggleLeftCircle');

toggleLeft.addEventListener('click',()=>{
    toggleLeftCircle.style.background = 'black';
    toggleRightCircle.style.background = 'white';
})

toggleRight.addEventListener('click',()=>{
    toggleLeftCircle.style.background = 'white';
    toggleRightCircle.style.background = 'black';
})