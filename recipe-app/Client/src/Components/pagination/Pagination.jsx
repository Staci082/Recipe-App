
function Pagination() {
  return (
    <>
    <div className="pagination-container">
      <nav className="pagination" aria-label="Pagination">
          <a href="#" disabled>&laquo;</a>
          {/* <a href="#" disabled>...</a> */}
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          {/* <a href="#" disabled>...</a> */}
          <a href="#" disabled>&raquo;</a>
      </nav>
    </div>
    </>
  )
}

export default Pagination