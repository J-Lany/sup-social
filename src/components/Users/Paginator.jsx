import React, { useState } from 'react';
import classes from './Users.module.css';

let Paginator = ({ totalUserCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber -1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div>
            <div className={classes.pages}>
                {portionNumber > 1 &&
                    <button
                    onClick={() => { setPortionNumber(portionNumber - 1) }}
                    className={classes.arrow}
                    >←</button>}
                {pages
                    .filter(page => {
                        return (page >= leftPortionNumber && page <= rightPortionNumber)
                    } )
                    .map((page) =>
                        <span
                            className={currentPage === page && classes.selectedPage}
                            onClick={() => { onPageChanged(page) }}
                            key={page}
                        >
                            {page}
                        </span>)}
                {portionCount > portionNumber &&
                    <button 
                    className={classes.arrow}
                    onClick={() => { setPortionNumber(portionNumber + 1) }}
                    >
                        →
                    </button>}
            </div>
        </div>
    )
}

export default Paginator;