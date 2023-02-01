import './Frcst.css';
import { useState } from 'react';

const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */

    // 변수 배열로 선언
    // useState -> hook
    // const[변수명, 변수를 바꾸는 함수명(set으로 시작)]
    // 변수를 바꾸고 싶으면 set변수명. 내가 setInfo를 만들 필요x
    // 일반 변수를 쓰면 누를 때 마다 값 바뀌지x. 변수가 바뀌어도 화면에 렌더링 안됨. 처음의 값 그대로
    // state 변수를 쓰면 값이 바뀌면 알아서 바뀜
    const [info, setInfo] = useState();

    const items = [
        {
        "frcstFourDt":"2023-02-05",
        "frcstThreeDt":"2023-02-04",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "frcstTwoDt":"2023-02-03",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstOneDt":"2023-02-02",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "presnatnDt":"2023-01-30"
        }
        ]

    let item = items[0];
    console.log(item); // Object만 가지고 옴

    const showInfo = (seldt) => {
        // console.log(seldt);
        let infoArry;

        // 데이터를 , 로 쪼갬 -> 배열로 받음
        // eslint-disable-next-line default-case
        switch (seldt) {
            case 1 : infoArry = item.frcstOneCn.split(',') ; break;
            case 2 : infoArry = item.frcstTwoCn.split(',') ; break;
            case 3 : infoArry = item.frcstThreeCn.split(',') ; break;
            case 4 : infoArry = item.frcstFourCn.split(',') ; break;
        }

        // map 사용
        // console 오류 -> key값 생성. 유일한 값
        // ` ` 백틱 -> 문자열. js
        // jsx 문법 안에서 js 문법 쓸 때는 { }
        infoArry = infoArry.map((v) => 
            // <li> 태그가 있는 배열
            // 1줄만 쓸 수 있음
            //<li key={`${v}-${seldt}`} className='lired' >{v}</li> 

            // 자바스크립트 문자열 includes -> true / false 반환
            // 자바 삼항연산자 -> map에서 쓸 수 있는 명령 1개. 그래서 react에서 삼항연산자 씀
            // (조건식)? A : B
            // style 쓰려면 Object type으로 들어가야 함

            /*
            v.includes('높음') ? 
                <li key={`${v}-${seldt}`} style={{color:'white', backgroundColor:'red'}} >{v}</li> :
                <li key={`${v}-${seldt}`} >{v}</li> 
            */

            
            // <li> 1개로 하고 <span>을 제어
            // 높음 글자만 빨간색
            <li key={`${v}-${seldt}`}>
                <span>{v.split(':')[0]}</span> (
                {
                v.includes('높음') ? 
                <span className='lired'>{v.split(':')[1]}</span> :
                <span>{v.split(':')[1]}</span> 
                } 
                )
            </li>
        ); 
        // infoArry = infoArry.map((v) => <li key={v + '-' + seldt}>{v}</li> ); // 연산자 + 보다 `` 쓰는게 좋음
        console.log(infoArry);

        setInfo(infoArry); // info가 바뀌는것 -> mainbox2의 info가 바뀜
    }
  
    return (
        <>
            <div className="header">
                <h1>미세먼지 예보</h1>
            </div>
            <div className="main">
                <div className="mainbox1">
                    <div className="dtdiv1" onClick={() => showInfo(1)}>{item.frcstOneDt}</div>
                    <div className="dtdiv1" onClick={() => showInfo(2)}>{item.frcstTwoDt}</div>
                    <div className="dtdiv1" onClick={() => showInfo(3)}>{item.frcstThreeDt}</div>
                    <div className="dtdiv1" onClick={() => showInfo(4)}>{item.frcstFourDt}</div>
                </div>
                <div className="mainbox2">
                    <div className='detail'>
                        <ul>{info}</ul>
                    </div>
                </div>    
            </div>

        </>
         
    ) ;
}

export default Frcst ;

// 배열 : 위치 순서를 가지고 데이터 구분 / [] / x=[10,20,30] index값으로 구분(위치). x[0]=10
// Object : key를 가지고 데이터 구분 / {} /  x={'서울':10,'부산':20,'대구':30} . 위치 상관없이 key값을 가지고 오면 됨 .순서 상관x