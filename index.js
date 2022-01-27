const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')
const clearButton = document.querySelector('#clear-button')

let redButton = document.querySelector('#red')
let blueButton = document.querySelector('#blue')
let yellowButton = document.querySelector('#yellow')
let greenButton = document.querySelector('#green')

palette.addEventListener('click', function(e) {
    selectedColor = e.target.id
})

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

painting.addEventListener('dblclick', function(e) {
    e.target.style.backgroundColor = 'unset'
})

var pixels = document.querySelectorAll('.pixel')
clearButton.addEventListener('click', function() {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white'
    }
})