import Mydiv11 from "./Mydiv11";
import { useState } from "react";
import { useEffect } from "react";

// 속성값 받아야 함 probs
const Mydiv1 = ({rname, n, setN}) => {
    console.log("mydiv", rname);

    const user = rname;
    // console.log(probs); // probs를 넘어오면 Prototype : Object , 값 가져오고 싶으면 Object.key값 
    // 바뀌어야 하는 값은 const로 정의하면 안됨. let 사용

    let [cnt, setCnt] = useState(0); // useState는 함수형으로 리턴 [변수명, 콜백함수이름]

    const addCnt = () => {
        setCnt(++cnt); // cnt 증가시키고 전달
        setN(cnt);
        console.log(cnt);

    }

    // useEffect -> 3종류 (x, [빈배열], [...])
    useEffect(()=>{
        console.log('변경되었습니다.') // 재렌더링 될 때 마다 실행
    });

    useEffect(()=>{
        console.log('Mydiv1 처음입니다.') // 최초1번만
        return(
            // 컴포넌트 종료시 
            console.log('종료')
        );
    }, []);

    // cnt가 바뀌고 나면 useEffect로 옴
    useEffect(()=> {
        console.log('cnt변경으로 n변경')
        setN(cnt);
    }, [cnt]);
    
    return(
        <div className="mydiv1">
            {/* n은 부모의 n과 같음 */}
            <h2 className="divh2">Mydiv1 {user} n={n}</h2>
            <Mydiv11 user={user} divname={'사용자정의'+ cnt }/>
            <div className="divbt">
                <button onClick={addCnt}>💙</button>
                <span>{cnt}</span>
            </div>
        </div>

    );
}
export default Mydiv1;