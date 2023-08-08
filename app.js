// OPEN/CLOSE MODALS

const addModal = document.querySelector("#addModal");
const addButton = document.querySelector("#add-recipe");
const closeAddModal = document.querySelector("#close-add-modal");

addButton.addEventListener("click", () => {
    addModal.style.display = "block";
});
closeAddModal.addEventListener("click", () => {
    addModal.style.display = "none";
})


// CLOSE MODAL BY CLICKING OUTSIDE OF MODAL
window.onclick = function (event) {
    if (event.target == addModal) {
        addModal.style.display = "none";
    }
};
