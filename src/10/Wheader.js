import { Link } from "react-router-dom";
const Wheader = ({title}) => {
    return(
        <>
            <div className="wh">
                <h1>{title}</h1>
                <div className="whdiv">
                    {/* <Link to="/">β</Link> */}
                    <Link to="/"><button className="homebt">νμΌλ‘</button></Link>
                </div>
            </div>
        </>
    );
}
export default Wheader;