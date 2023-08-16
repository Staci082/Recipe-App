
// INGREDIENTS IN FORM PAGE

let addIngredientBtn = document.querySelector('.ingredient-button')
let ingredientList = document.querySelector('.ingredients-list')
let ingredientDiv = document.querySelectorAll('.ingredient-div')[0]


addIngredientBtn.addEventListener('click', function() {

    let newIngredient = ingredientDiv.cloneNode(true)
    ingredientList.appendChild(newIngredient)

})



// // DELETE RECIPE MODAL

// const deleteBtn = document.getElementById('#delete-button')
// const deleteModal = document.querySelector('#delete-modal')

// deleteBtn.addEventListener('click', () => {
//     deleteModal.style.display = "block";
//     console.log('clicked')
// })