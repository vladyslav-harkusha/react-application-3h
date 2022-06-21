import { getPagesArray } from "../../../utils/pages";
import cl from "./Pagination.module.css";

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={cl.pages__wrapper}>
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? `${cl.pages} ${cl.pages__current}` : cl.pages}
        >
          {p}
        </span>
      )}
    </div>
  )
}
