import { useState, useEffect, useRef } from "react";
import BoxofficeList from "./BoxofficeList";
import './Boxoffice.css';


const Boxoffice = () => {

    // 상영일 선택 state 변수
    // state 변수는 set- 로만 바꿀 수 있음
    const [targetDt, setTargetDt] = useState();

    // input 제어
    const mvdref = useRef();

    // 처음 랜더링
    useEffect(()=>{
        // 랜더링 될 때 포커스
        mvdref.current.focus();
    }, []);

    // targetDt 변경시
    useEffect(()=>{
        console.log("targetDt", targetDt);

    }, [targetDt])

    // input 이벤트 처리
    const handleMV = () => {
        console.log(mvdref.current.value) // 날짜가 바뀌는 값이 찍힘 2023-02-24 -> - 빼야함
        setTargetDt(mvdref.current.value.replaceAll('-','')) // js 문자열 변경함수 replace(1개만 변경됨), targetDt 변경됨 202302-07
    }

    return(
        <>
            <div className="mvheader">
                <h1>박스오피스</h1>
                {/* <form> 블록태그 */}
                <form>
                    <input type="date" name="mvd" ref={mvdref} onChange={handleMV}/>
                </form>
            </div>
            <div className="mvmain">
                {/* 날짜가 바뀔 때마다 컴포넌트 다시 부름 */}
                {/* null, undefined -> false */}
                {/* targetDt가 비어있으면 && 이후 실행x */}
                {targetDt && <BoxofficeList tDt={targetDt}/>}
            </div>

        </>
    );
}
export default Boxoffice;
