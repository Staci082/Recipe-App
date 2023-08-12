let addIngredientBtn = document.querySelector('.ingredient-button')
let ingredientList = document.querySelector('.ingredients-list')
let ingredientDiv = document.querySelectorAll('.ingredient-div')[0]


addIngredientBtn.addEventListener('click', function() {

    
    let newIngredient = ingredientDiv.cloneNode(true)
        
    let input = newIngredient.querySelector('input')[0]

    

    
    console.log("meow")
    ingredientList.appendChild(newIngredient)

    console.log("meow")
})


// const addButton = document.querySelector('.ingredient-button')
// const input = document.querySelector('.ingredient-input')
// const ingredientList = document.querySelector('.ingredients-list')
// const list = []

// function displayItems() {
//     let items= ""
//         for(let i = 0; i < list.length; i++) {
//             items += `<div class="ingredient-div">
//             ${list[i]}
//             <i class="fa-solid fa-ban fa-2xs"></i>
//             </div>`
//     }
//     ingredientList.innerHTML = items
// }

// addButton.addEventListener('click', () =>{
//     let newItem = document.createElement('div')

//     newItem = input.value
//     list.push(newItem)

//     input.value = ""
//     console.log(list)
    
//     displayItems()
// })