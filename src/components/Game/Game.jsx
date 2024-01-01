import classes from './Game.module.css'
import { useState } from 'react';

export default function Game() {

    const [xIsNext, setXisNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O'
        }

        setSquares(nextSquares);
        setXisNext(!xIsNext);
    };

    const winner = calculateWinner(squares);
    let status;

    if(winner) {
        status = 'Congrats, winner - ' + winner;
        alert(`Congrats, winner - ${winner}`)
        setSquares(Array(9).fill(null))
    } else {
        status = 'Next player - ' + (xIsNext ? 'X' : 'O')
    }

    return (
        <div className={classes.gameBoard}>
            <div className={classes.status}> {status}</div>
            <div className={classes.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className={classes.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className={classes.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>

        </div>
    )
}

function Square(props) {
    return (
        <button className={classes.square} onClick={props.onSquareClick}>
           <div>{props.value || "-"}</div>
        </button>
    )
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null;
}