// DELETE RECIPE MODAL

let deleteBtn = document.getElementById('delete-button')
const deleteModal = document.querySelector('#delete-modal')

deleteBtn.addEventListener('click', () => {
    deleteModal.style.display = "flex";
    console.log('clicked')
})