
function Pagination({ totalRecipes, recipesPerPage, setCurrentPage, currentPage }) {

  let pages = []

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pages.push(i)
  }

  return (
    <>
    <div className="pagination-container">
      <nav className="pagination" aria-label="Pagination">
        {pages.map((page, index) => {
          return (
            <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>
                {page}
            </button>
          )
        })}
      </nav>
    </div>
    </>
  )
}

export default Pagination

{/* <div className="pagination-container">
      <nav className="pagination" aria-label="Pagination">
          <a href="#" disabled>&laquo;</a>
          {/* <a href="#" disabled>...</a> */}
          // <a href="#">1</a>
          // <a href="#">2</a>
          // <a href="#">3</a>
          {/* <a href="#" disabled>...</a> */}
          // <a href="#" disabled>&raquo;</a>
      // </nav>
    // </div> */}