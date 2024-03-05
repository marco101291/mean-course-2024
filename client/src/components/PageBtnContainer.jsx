import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAllJobsContext } from '../pages/AllJobs';


const PageBtnContainer = () => {
  const {data: {numOfPages, currentPage}} = useAllJobsContext();
  const pages = Array.from ({length: numOfPages},(_, index) => index + 1
  )
  console.log("pages", pages);

  const {search, pathname} = useLocation();
  const navigate = useNavigate();

  console.log(search, pathname);

  const handlePageChange = (pageNumber) =>{
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
    console.log(pageNumber);
  };
  
  return (
    <Wrapper>
        <button className="btn prev-btn" onClick={()=>{
            let prevPage = currentPage - 1;
            if(prevPage < 1) prevPage = 1
            handlePageChange(prevPage)
        }}>
            <HiChevronDoubleLeft />
            prev
        </button>
        <div className="btn-container">
            {pages.map((pageNumber)=>{
                return (
                    <button 
                        className={`btn page-btn ${
                        pageNumber === currentPage && 'active'}`}
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        >
                        {pageNumber}
                    </button>
                )
            })}
              <button className="btn next-btn" onClick={() => {
                  let nextPage = currentPage + 1;
                  if (nextPage > numOfPages) nextPage = numOfPages
                  handlePageChange(prevPage)
              }}>
                next
                <HiChevronDoubleRight />
            </button>
        </div>
    </Wrapper>
  )
  
}
export default PageBtnContainer