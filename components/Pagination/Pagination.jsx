import { useState } from "react";

const Pagination = (props) => {
  const productsPerPage = props.productsPerPage;
  const totalProducts = props.totalProducts;

  const total_pages = Math.ceil(totalProducts / productsPerPage);

  const [page, setPage] = useState(1);

  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    props.onChange(page - 1);
  };
  const nextHandler = () => {
    if (page === total_pages) return;

    setPage((page) => page + 1);
    props.onChange(page + 1);
  };
  return (
    <div className="pagination__card">
      <div className="pagination__icons--box">
        <i
          onClick={prevHandler}
          className={`icofont-arrow-left pagination__icons--prev ${
            page === 1 ? " not__allowed" : ""
          }`}
        ></i>

        <p className="pagination__icons--paragraph">{page}</p>
        <i
          onClick={nextHandler}
          className={` icofont-arrow-right pagination__icons--next ${
            page === total_pages || total_pages < 1 ? " not__allowed" : ""
          }`}
        ></i>
      </div>
      <div className="pagination__buttons">
        {Array.from({ length: total_pages }, (_, index) => index + 1).map(
          (each) => (
            <button
              key={each}
              onClick={() => {
                props.onChange(each);
                setPage((page) => each);
              }}
            >
              {each}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default Pagination;
