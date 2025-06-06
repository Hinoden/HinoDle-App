import '../styles/Game.css';

function Game() {
    return (
        <div className="game-container">
            <div className="nav-bar">
                <h1 className="game-title">Hinodle</h1>
                <hr className="hor-line"/>
            </div>
            <div className="game-board">
                <div className="game-row">
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                </div>
                <div className="game-row">
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                </div>
                <div className="game-row">
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                </div>
                <div className="game-row">
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                </div>
                <div className="game-row">
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                </div>
                <div className="game-row">
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                    <div className="game-cell"></div>
                </div>
            </div>
            <div className="keyboard">
                <div className="keyboard-row">
                    <button className="keyboard-key">Q</button>
                    <button className="keyboard-key">W</button>
                    <button className="keyboard-key">E</button>
                    <button className="keyboard-key">R</button>
                    <button className="keyboard-key">T</button>
                    <button className="keyboard-key">Y</button>
                    <button className="keyboard-key">U</button>
                    <button className="keyboard-key">I</button>
                    <button className="keyboard-key">O</button>
                    <button className="keyboard-key">P</button>
                </div>
                <div className="keyboard-row">
                    <button className="keyboard-key">A</button>
                    <button className="keyboard-key">S</button>
                    <button className="keyboard-key">D</button>
                    <button className="keyboard-key">F</button>
                    <button className="keyboard-key">G</button>
                    <button className="keyboard-key">H</button>
                    <button className="keyboard-key">J</button>
                    <button className="keyboard-key">K</button>
                    <button className="keyboard-key">L</button>
                </div>
                <div className="keyboard-row">
                    <button className="keyboard-key keyboard-key-wide">ENTER</button>
                    <button className="keyboard-key">Z</button>
                    <button className="keyboard-key">X</button>
                    <button className="keyboard-key">C</button>
                    <button className="keyboard-key">V</button>
                    <button className="keyboard-key">B</button>
                    <button className="keyboard-key">N</button>
                    <button className="keyboard-key">M</button>
                    <button className="keyboard-key keyboard-key-wide">DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default Game;