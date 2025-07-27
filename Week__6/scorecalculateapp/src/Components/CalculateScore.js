import "../StyleSheets/mystyle.css";

const CalculateScore = ({Name,School,Total,goal}) => {
    const percentToDecimal = (decimal) => {
    return (decimal.toFixed(2)+'%');
}

const calScore = (total,goal) => {
    return percentToDecimal(total/goal);
}
    return (
        <div>
        <h1><font color="brown">Student Details: </font></h1>
        <div className="Name">
            <b><span>Name:</span></b>
            <span>{Name}</span>
        </div>
        <div className="School">
            <b><span>School:</span></b>
            <span>{School}</span>
        </div>
        <div className="Total">
            <b><span>Total :</span></b>
            <span>{Total}</span>
            <span> Marks </span>
        </div>
        <div className="Score">
            <b><span>Score :</span></b>
            <span>{calScore(Total, goal)}</span>
        </div>
    </div>
    );
}

export default CalculateScore;