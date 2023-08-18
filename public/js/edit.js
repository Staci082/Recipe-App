// DELETE RECIPE MODAL

let deleteBtn = document.getElementById('delete-button')
const deleteModal = document.querySelector('#delete-modal')
const noBtn = document.querySelector('.no-button')

deleteBtn.addEventListener('click', () => {
    deleteModal.style.display = "flex";
})


noBtn.addEventListener('click', () => {
    deleteModal.style.display = "none";
})