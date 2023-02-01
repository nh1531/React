import Mydiv11 from "./Mydiv11";
import { useState } from "react";

// 속성값 받아야 함 probs
const Mydiv1 = (probs) => {
    const user = probs.user;
    // console.log(probs); // probs를 넘어오면 Prototype : Object , 값 가져오고 싶으면 Object.key값 
    // 바뀌어야 하는 값은 const로 정의하면 안됨. let 사용

    let [cnt ,setCnt] = useState(0); // useState는 함수형으로 리턴 [변수명, 콜백함수이름]

    const addCnt = () => {
        setCnt(++cnt);
        console.log(cnt);
    }
    
    return(
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {probs.user}</h2>
            <Mydiv11 user={user} divname={'사용자정의'+ cnt }/>
            <div className="divbt">
                <button onClick={addCnt}>💙</button>
                <span>{cnt}</span>
            </div>
        </div>

    );
}
export default Mydiv1;