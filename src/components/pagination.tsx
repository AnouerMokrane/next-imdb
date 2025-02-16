"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Pagination({ total_pages }: { total_pages: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);
  const pagesPerGroup = 10;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextGroup = () => {
    if ((pageGroup + 1) * pagesPerGroup < total_pages) {
      setPageGroup(pageGroup + 1);
    }
  };

  const handlePrevGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(pageGroup - 1);
    }
  };

  const startPage = pageGroup * pagesPerGroup;
  const endPage = Math.min(startPage + pagesPerGroup, total_pages);

  return (
    <div className="flex justify-center space-x-2 pt-14">
      <button
        onClick={handlePrevGroup}
        disabled={pageGroup === 0}
        className="text-black bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
      >
        Prev
      </button>
      {[...Array(endPage - startPage)].map((_, i) => (
        <Link
          href={`/top-rated?page=${startPage + i + 1}`}
          key={startPage + i}
          onClick={() => handlePageClick(startPage + i + 1)}
          className={`px-3 py-1 text-black rounded ${
            currentPage === startPage + i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          {startPage + i + 1}
        </Link>
      ))}
      <button
        onClick={handleNextGroup}
        disabled={endPage >= total_pages}
        className="text-black bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
}
