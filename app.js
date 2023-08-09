// OPEN/CLOSE MODALS

let modal = document.querySelector(".modal")

const addModal = document.querySelector("#addModal");
const viewModal = document.querySelector("#viewModal");
const searchModal = document.querySelector("#searchModal");

const addButton = document.querySelector("#add-button");
const viewButton = document.querySelector("#view-button");
const searchButton = document.querySelector("#search-button");

const closeAddModal = document.querySelector("#close-add-modal");
const closeViewModal = document.querySelector("#close-view-modal");
const closeSearchModal = document.querySelector("#close-search-modal");


addButton.addEventListener("click", () => {
    addModal.style.display = "block";
});

closeAddModal.addEventListener("click", () => {
    addModal.style.display = "none";
})

viewButton.addEventListener("click", () => {
    viewModal.style.display = "block";
});

closeViewModal.addEventListener("click", () => {
    viewModal.style.display = "none";
});

searchButton.addEventListener("click", () => {
    searchModal.style.display = "block";
});

closeSearchModal.addEventListener("click", () => {
    searchModal.style.display = "none";
});


// CLOSE MODAL BY CLICKING OUTSIDE OF MODAL
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
