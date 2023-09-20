
import ReactPaginate from "react-paginate";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={<FaAnglesLeft />}
      nextLabel={<FaAnglesRight />}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      previousLinkClassName={"previous-button"}
      nextLinkClassName={"next-button"}
      disabledClassName={"pagination-disabled"}
      activeClassName={"pagination-active"}
    />
  );
}

export default Pagination;