import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function Pagination({ pageCount, onPageChange }) {
  const [visiblePages, setVisiblePages] = useState(3); 
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) {
      setVisiblePages(2);
    } else {
      setVisiblePages(3); 
    }
  }, [isMobile]);

  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={<FaAnglesLeft className="pagination-arrows"/>}
      nextLabel={<FaAnglesRight className="pagination-arrows" />}
      pageCount={pageCount}
      pageRangeDisplayed={visiblePages}
      marginPagesDisplayed={visiblePages}
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