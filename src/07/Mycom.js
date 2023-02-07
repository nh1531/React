import { useState, useEffect, useRef } from "react";

const Mycom = () => {
    const [tag, setTag] = useState(); // 바뀔 때마다 변경되어야 하니까 state 변수

    const txt1R = useRef();
    const txt2R = useRef();

    // 컴포넌트가 처음 랜더링 되었을 때
    // [] -> 맨 처음 한번 실행됨
    useEffect(()=>{
        txt1R.current.focus();
    },[]);

    const checkForm = (e) => {
        // form의 이벤트 처리 (이벤트가 물리는 경우가 있기 때문)
        e.preventDefault();

        //console.log("checkForm");
        setTag(`입력된 아이디는 ${txt1R.current.value}이고 비밀번호는 ${txt2R.current.value} 입니다.`);
    }
    
    return (
        <>
            {/* reset 사용하려면 form 태그로 묶어야 함 */}
            <form>
                <input ref={txt1R} type="text" name="txt1" placeholder="아이디 입력" />
                <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호 입력" />
                {/* <input type="submit" value="확인" /> */}
                <input type="button" value="확인" onClick={checkForm} />
                <input type="reset" value="취소" />
            </form>

            <div>
                {tag}
            </div>

        </>
    );
}
export default Mycom;
