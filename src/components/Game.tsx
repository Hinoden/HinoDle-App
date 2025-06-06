import { useState, useEffect } from 'react';
import '../styles/Game.css';

function Game() {
    const emptyBoard = Array(6).fill(null).map(() => Array(5).fill(''));
    const [board, setBoard] = useState(emptyBoard);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentTile, setCurrentTile] = useState(0);
    const [results, setResults] = useState(Array(6).fill(null));
    const secretWord = "CRANE";

    const handleKeyClick = (letter) => {
        if (letter === 'DELETE'){
            if (currentTile > 0){
                const newBoard = [...board];
                newBoard[currentRow][currentTile - 1] = '';
                setBoard(newBoard);
                setCurrentTile(currentTile - 1);
            }
        }
        else if (letter === 'ENTER'){
            if (currentTile === 5){
                const guessedWord = board[currentRow].join('');
                const result = checkGuess(guessedWord);
                const newResults = [...results];
                newResults[currentRow] = result;
                setResults(newResults);
                setCurrentRow(currentRow + 1);
                setCurrentTile(0);
            }
            return;
        } else if (currentTile < 5){
            const newBoard = [...board];
            newBoard[currentRow][currentTile] = letter;
            setBoard(newBoard);
            setCurrentTile(currentTile + 1);
        }
    }

    function checkGuess(guessedWord){
        const result = Array(5).fill("g");
        const secretArr = secretWord.split('');
        const guessedArr = guessedWord.split('');

        for (let i = 0; i < 5; i++){
            if (guessedArr[i] === secretArr[i]){
                result[i] = "gr";
                secretArr[i] = null;
                guessedArr[i] = null;
            }
        }

        for (let i = 0; i < 5; i++){
            if (guessedArr[i] && secretArr.includes(guessedArr[i])){
                result[i] = "y";
                secretArr[secretArr.indexOf(guessedArr[i])] = null;
            }
        }

        return result;
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();
            if (key === 'ENTER' || key === 'BACKSPACE' || /^[A-Z]$/.test(key)) {
                if (key === 'BACKSPACE') {
                    handleKeyClick('DELETE');
                } else {
                    handleKeyClick(key);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [board, currentRow, currentTile]);

    return (
        <div className="game-container">
            <div className="nav-bar">
                <h1 className="game-title">Hinodle</h1>
                <hr className="hor-line"/>
            </div>
            <div className="game-board">
                {board.map((row, rowIndex) => (
                    <div className="game-row" key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            const colorClass = results[rowIndex]?.[cellIndex] || '';
                            return (
                                <div className={`game-cell ${colorClass}`} key={cellIndex}>
                                    {cell}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="keyboard">
                {['QWERTYUIOP', 'ASDFGHJKL', 'ENTERZXCVBNMDELETE'].map((row, rowIndex) => (
                    <div className="keyboard-row" key={rowIndex}>
                        {row.match(/ENTER|DELETE|[A-Z]/g).map((key) => (
                            <button key={key} className={`keyboard-key ${key.length> 1 ? 'keyboard-key-wide' : ''}`} onClick={()=> handleKeyClick(key)}>{key}</button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game;