import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css';

const Mydiv = () =>{
    const rname = 'React' ;
    return(
        //<Fragment></Fragment> ,  <></>
        <div className="content"> 
            <div className="header">
                {/* jsx에서 자바스크립트 문법 쓰려면 중괄호 사용{} */}
                <h1>컴포넌트 예제 - {rname}</h1>
            </div>
            
            <div className="main">
                {/* user의 속성값 rname */}
                <Mydiv1 user={rname} />
                <Mydiv2 user={rname}/>
            </div>
        </div>
        
    );
}
export default Mydiv; // 이걸로 내보내야 바깥에서 import로 받을 수 있음