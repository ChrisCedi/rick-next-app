"use client";
import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  previousPage: () => void;
  nextPage: () => void;
  totalPages: number;
}

export function Pagination({
  currentPage,
  previousPage,
  nextPage,
  totalPages,
}: PaginationProps) {
  console.log(totalPages);
  return (
    <div className="flex items-center justify-between mt-10">
      <Button onClick={previousPage} disabled={currentPage === 1} size="sm">
        Anterior
      </Button>
      <p>
        {currentPage} / {totalPages === null ? "1" : totalPages}
      </p>
      <Button
        onClick={nextPage}
        disabled={currentPage === totalPages || totalPages === null}
        size="sm"
      >
        Siguiente
      </Button>
    </div>
  );
}
