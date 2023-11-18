import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

const Pagination = ({currentPage, totalPages, setCurrentPage}:{currentPage: number, totalPages: number, setCurrentPage:any}) => {
    const handlePageChange = (page:number) => {
        setCurrentPage(page);
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage:number) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage: number) => prevPage + 1);
        }
    };
    return (
        <div className="px-5 py-3 flex justify-end">
        <nav>
            <ul className="flex items-center space-x-2">
                <li>
                    <button
                        className="px-2 py-1 rounded-lg mx-2"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        <MdOutlineArrowBackIosNew />
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = currentPage === pageNumber;
                    const isFirstPage = pageNumber === 1;
                    const isLastPage = pageNumber === totalPages;

                    if (isFirstPage || isLastPage || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
                        return (
                            <li
                                key={pageNumber}
                                className={`${isCurrentPage ? "font-semibold border border-primary  h-8 w-8 text-center" : ""} mr-2`}
                            >
                                <button className="px-2 py-1 rounded-lg" onClick={() => handlePageChange(pageNumber)}>
                                    {pageNumber}
                                </button>
                            </li>
                        );
                    } else if ((pageNumber === currentPage - 2 && currentPage > 3) || (pageNumber === currentPage + 2 && currentPage < totalPages - 2)) {
                        return (
                            <li key={pageNumber} className="mr-2">
                                ...
                            </li>
                        );
                    }
                })}
                <li>
                    <button
                        className={`px-2 py-1 rounded-lg`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Pagination;