import { useState, useEffect, useRef } from "react";

const Mycom = () => {
    // 컴포넌트 내부 변수 (로컬) -> 렌더링하면 값이 초기화 됨
    let cnt1 = 0;

    // state 변수 (react가 관리) -> 항상 렌더링 발생
    const [cnt2, setCnt2] = useState(0);

    // ref 변수 -> 리액트가 값을 기억하고 있지만 렌더링 발생시키지 x. 렌더링 일어날 때 내 값이 찍힘.
    // 렌더링해도 값 초기화x. react가 관리하기 때문. 
    const cnt3 = useRef(0);

    // 함수
    const showCnt = () => {
        console.log(`cnt1 = ${cnt1}`);
        console.log(`cnt2 = ${cnt2}`);
        console.log(`cnt3 = ${cnt3.current}`);
    }
    const addCnt1 = () => {
        cnt1 = cnt1 + 1 ;
        //console.log(cnt1);
        showCnt();
    }

    const addCnt2 = () => {
        setCnt2(cnt2 +1);
        // 여기서 console 찍어도 안나옴. useEffect에서 확인해야 함
    }
    useEffect(()=> { 
        //console.log(cnt2); 
        showCnt();
    }, [cnt2]);

    const addCnt3 = () => {
        cnt3.current = cnt3.current + 1 ;
        showCnt();
    }


    return(
        <>
            <ul>
                <li>cnt1 = {cnt1}</li>
                <li>cnt2 = {cnt2}</li>
                <li>cnt3 = {cnt3.current}</li>
            </ul>
            <form>
                <input type="button" value="cnt1증가" onClick={addCnt1}/>
                <input type="button" value="cnt2증가" onClick={addCnt2} />
                <input type="button" value="cnt3증가" onClick={addCnt3} />
            </form>
        </>
    );
}
export default Mycom;
