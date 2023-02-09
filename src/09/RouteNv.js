import { Link } from "react-router-dom"; // Route 사용하면 href 쓰면 안됨

const RouteNv = () => {
    return(
        <>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/p1">페이지1</Link></li>
                <li><Link to="/p2">페이지2</Link></li>
            </ul>
        </>
    );
}
export default RouteNv;