import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const RoutePage2 = () => {
    let location = useLocation().search; // search ? 이하만 받아옴
    console.log("location", location);
    let item = qs.parse(location).item;
    console.log("item", item);

    const fruits = ['사과🍎', '바나나🍌'];
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다.";


    // let location = 'https://n.news.naver.com/article/658/0000032653?cds=news_media_pc&type=editn';
    //location = location.split('?')[1];
    // let item = qs.parse(location);
    // console.log(item);

    return(
        <>
            <h1>Page2</h1>
            <p>{`${item}는 ${tag}`}</p>
        </>
    );
}
export default RoutePage2;