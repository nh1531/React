import Wheader from "./Wheader";
import { Link } from "react-router-dom";
import './W.css';

const Wmenu = () => {


    return (
        <>
            <div className="content">
                <Wheader title={'일기예보'} />
                
                <div className="wmenu">
                    <ul>
                        <li><Link to="/w1">단기</Link></li>
                        <li><Link to="/w2">중기</Link></li>
                    </ul>
                </div>
               

            </div>

        </>
    );
}
export default Wmenu;