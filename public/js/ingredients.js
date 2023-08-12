let addIngredientBtn = document.querySelector('.ingredient-button')
let ingredientList = document.querySelector('.ingredients-list')
let ingredientDiv = document.querySelectorAll('.ingredient-div')[0]


addIngredientBtn.addEventListener('click', function() {

    let newIngredient = ingredientDiv.cloneNode(true)
    ingredientList.appendChild(newIngredient)

})

