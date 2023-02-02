import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css';
import { useState } from "react";

const Mydiv = () =>{
    const rname = 'React' ;
    let [n, setN] = useState(0);

   
    
    return(
        //<Fragment></Fragment> ,  <></>
        <div className="content"> 
            <div className="header">
                {/* jsx에서 자바스크립트 문법 쓰려면 중괄호 사용{} */}
                <h1>컴포넌트 예제 - {rname} {n}</h1>
            </div>
            
            <div className="main">
                {/* user의 속성값 rname */}
                {/* 속성값도 전달 가능 setN */}
                <Mydiv1 rname={rname} n={n} setN={setN} />
                <Mydiv2 div2n={n}/>
            </div>
        </div>
        
    );
}
export default Mydiv; // 이걸로 내보내야 바깥에서 import로 받을 수 있음