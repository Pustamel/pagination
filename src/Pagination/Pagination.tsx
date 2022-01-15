import styles from './pagination.module.css'
import {useEffect, useState} from "react";

interface paginationProps {
    setCurrentPage?: any
}

export const Pagination = ({setCurrentPage}: paginationProps) => {
    const [page, setPage] = useState(1)

    const clickArrow = (direction: string) => {
        if (direction === 'left') {
            return page > 1 ? setPage(page - 1) : page
        } else if (direction === 'right') {
            return page >= 1 ? setPage(page + 1) : page
        }
    }

    useEffect(() => {
        setCurrentPage(page)
    }, [page])

    return (<div className={styles.containerPagination}>
            <button onClick={() => clickArrow('left')} className={styles.arrow}>←</button>
            <span>{1 + (page - 1) * 5}</span>
            <span>{2 + (page - 1) * 5}</span>
            <span>{3 + (page - 1) * 5}</span>
            <span>{4 + (page - 1) * 5}</span>
            <span>{5 + (page - 1) * 5}</span>
            <button onClick={() => clickArrow('right')} className={styles.arrow}>→</button>
        </div>
    )
}
