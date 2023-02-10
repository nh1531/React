import { Link } from "react-router-dom"; // Route 사용하면 a href 쓰면 안되고 link 써야 함 -> elements창에서 a href로 변환되어 보임

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