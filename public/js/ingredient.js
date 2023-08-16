
// INGREDIENTS IN FORM PAGE

let ingredientInput = document.getElementById('ingredient-input')
let addIngredientBtn = document.querySelector('.ingredient-button')
let ingredientList = document.querySelector('.ingredients-list')
// let ingredientContainer = document.querySelector('.ingredients-list-item')
let ingredientDiv = document.querySelectorAll('.ingredient-div')[0]


addIngredientBtn.addEventListener('click', function() {

    let newIngredient = ingredientInput.cloneNode(true)
    newIngredient.classList.add('new-ingredient')
    ingredientList.appendChild(newIngredient)
    ingredientInput.value = ""
})



