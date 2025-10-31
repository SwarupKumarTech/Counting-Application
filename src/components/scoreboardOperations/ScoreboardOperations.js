import './scoreboardOperations.css';
function ScoreboardOperations(props) {
    const { incrementScore } = props;
    return (
        <div className="button-container">
            <button className="button" onClick={()=>{incrementScore(1)}}>+1</button>
            <button className="button" onClick={()=>{incrementScore(5)}}>+5</button>
            <button className="button" onClick={()=>{incrementScore(-5)}}>-5</button>
        </div>
    );
};
export default ScoreboardOperations;