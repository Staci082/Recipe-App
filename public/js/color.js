
// COLOR NAV

const paintBrush = document.getElementById('color-picker')
const colorNav = document.getElementById('color-nav')

paintBrush.addEventListener('mouseover', () => {
    colorNav.style.display = "flex";
})

colorNav.addEventListener('mouseover', () => {
    colorNav.style.display = "flex";
})

colorNav.addEventListener('mouseout', () => {
    colorNav.style.display = "none";
})


// COLOR TOGGLES

const pink = document.getElementById('pink')
const cyan = document.getElementById('cyan')
const green = document.getElementById('green')
const purple = document.getElementById('purple')
const yellow = document.getElementById('yellow')

const body = document.getElementsByTagName('body')


yellow.addEventListener('click', () => {
    body.classList.add('yellow')
    console.log('yellow')
})