import { getPagesArray } from "../../../utils/pages";

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pages__wrapper">
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "pages pages--current" : "pages"}
        >
          {p}
        </span>
      )}
    </div>
  )
}
