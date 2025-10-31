import './scoreboard.css';
function Scoreboard(props) {
    const score = props.score;
    return (
        <>
        <h2 className='Heading'>Counter</h2>
        <div className="scoreboard-wrapper">
            <div class="scoreboard-container">
                <h1 id="NumCounter">{score}</h1>
            </div>
        </div>
        </>
    )
};
export default Scoreboard;