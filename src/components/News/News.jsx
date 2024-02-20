// import classes from './News.module.css'
import React from 'react';
import { useState, useEffect } from 'react';

const DEFAULT_DELAY = 500;

function getPeople(search, page = 1, options = {}) {
    return fetch(
        `https://swapi.dev/api/people?search=${search}&page=${page}`,
        options
    )
        .then((res) => res.json())
        .then((data) => data)
}

const debounce = (callback, delay) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            timeoutId = null //зачем тут все такие это
            callback(...args)
        }, delay)
    }
}

const useInput = ({ delay, onInputComplete }) => {
    const [inputText, setInput] = useState('');
    const [isFetching, setFetching] = useState(false);
    const [requestResult, setRequestResult] = useState([]);

    useEffect(() => {
        if (!inputText) {
            setRequestResult([])
            return;
        }
        onInputComplete(inputText)
            .then(({ results }) => {
                setRequestResult(results)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => setFetching(false))
    }, [inputText]);

    let handleChange = (e) => {
        setFetching(true)
        setInput(e.target.value)
    }

    const debauncedHandler = debounce(handleChange, delay);

    return {
        debauncedHandler,
        isFetching,
        requestResult,
    }

}

const WinthLoader = ({ isFetching, children }) => {

    return (
        <>
            {isFetching
                ? <div>Loading...</div>
                : children
            }
        </>
    )

}

const Paginator = ({ items, itemPerPage, changePage }) => {
    const pagesNumber = [];
    for (let i = 1; i <= Math.ceil(items.length / itemPerPage); i++) {
        pagesNumber.push(i)
    }
    const buttonStyle = {
        border: '1px solid grey',
        padding: '5px',
        display: 'inline-block',
        margin: '8px',
        padding: '10px',
        borderRadius: '5px',

    }
    return (
        <ul>
            {pagesNumber.map((page) => <li key={page} style={buttonStyle} onClick={() => changePage(page)}>{page}</li>)}
        </ul>
    )
}

function News(props) {

    const { debauncedHandler, requestResult: heroesList, isFetching } = useInput({ delay: DEFAULT_DELAY, onInputComplete: getPeople })
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 2;
    const lastHeroIndex = currentPage * countriesPerPage;
    const firstHeroIndex = lastHeroIndex - countriesPerPage;
    const currentList = heroesList.slice(firstHeroIndex, lastHeroIndex);

    const handlePageChange = (number) => {
        setCurrentPage(number);
    }

    return (
        <div>
            Введите список героев:
            <input type='text' onChange={debauncedHandler} />
            <WinthLoader isFetching={isFetching}>
                <ul>
                    {currentList.map(({ name, url }) => <li key={url}>{name}</li>)}
                </ul>
                <Paginator items={heroesList} itemPerPage={countriesPerPage} changePage={handlePageChange} />
            </WinthLoader>
        </div>
    )
}
export default News






