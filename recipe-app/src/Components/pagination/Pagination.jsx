
function Pagination() {
  return (
    <>
    <div className="pagination-container">
      <nav className="pagination" aria-label="Pagination">
          <a href="#" className="arrow" disabled>&laquo;</a>
          <a href="#" disabled>...</a>
          <a href="#">current</a>
          <a href="#" disabled>...</a>
          <a href="#" className="arrow" disabled>&raquo;</a>
      </nav>
    </div>
    </>
  )
}

export default Pagination