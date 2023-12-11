import styles from './PaginationBlock.module.css'
import {Dispatch, SetStateAction} from "react";
import {Pagination} from "react-bootstrap";
import './PaginationBlock.css'

interface IProps {
   pages: number
   setPage: Dispatch<SetStateAction<number>>
   activePage: number
}

const PaginationBlock = (props: IProps) => {

   const { pages, setPage, activePage } = props

   return (
      <div className={`${styles.wrapper} PaginationBlock`}>
         <Pagination className={styles.pagination}>
            <Pagination.Prev
               disabled={activePage === 1}
               onClick={() => setPage(prev  => prev - 1)}
            />

            <Pagination.Item active={activePage === 1} onClick={() => setPage(1)}>
               1
            </Pagination.Item>
            <Pagination.Item active={activePage === 2} onClick={() => setPage(2)}>
               2
            </Pagination.Item>
            <Pagination.Item active={activePage === 3} onClick={() => setPage(3)} hidden={pages < 3}>
               3
            </Pagination.Item>
            <Pagination.Item active={activePage === 4} onClick={() => setPage(4)} hidden={pages < 4}>
               4
            </Pagination.Item>
            <Pagination.Item hidden={activePage <= 4 || activePage === pages} active>
               {activePage}
            </Pagination.Item>

            <Pagination.Ellipsis hidden={pages <= 4} />

            <Pagination.Item active={activePage === pages} onClick={() => setPage(pages)} hidden={pages <= 4}>
               {pages}
            </Pagination.Item>

            <Pagination.Next
               disabled={activePage === pages}
               onClick={() => setPage(prev => prev + 1)}
            />
         </Pagination>
      </div>
   );
};

export default PaginationBlock;