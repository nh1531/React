import './Frcst.css';
import Frcheader from './Frcheader';
import Frcdt from './Frcdt';
import Frccn from './Frccn';
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

    // 데이터 object 타입으로 전환 : fcrdt =["2023-02-05",..], fcrcn=['서울 : 낮음..'] 배열 2개 만듦
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

    
    // key 배열
    let frcdt = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt" ]; // 날짜는 바뀌지만 key는 바뀌지 않음
    let frccn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn" ];
    
    // 4번 돌면서 4개의 값. map은 끝나면 새로운 배열을 만들어 줌. 반복문처럼 처음부터 끝까지 가지고 옴
    // 1줄만 써야하니까 if문 못쓰고 삼항연산자 사용
    // items[0] -> Object
    // frcstOneDt => items 의 0번째 key값
    // Object에서 값을 가지고 오는 방법 : . / []  
    // * 예보일자별 배열 추출
    frcdt = frcdt.map((k)=>items[0][k]); 
    /* 반복문 사용시. 44 = 46-50 줄
    let temp = [];
    for(let k of frcdt){
        temp.push(items[0][k]);
    }
    frcdt = temp;
    */
    frccn = frccn.map((k)=>items[0][k]); 
    console.log("frcdt : ", frcdt );
    console.log("frccn : ", frccn );

    // {'2023-02-03': '서울...', }
    // key 날짜 , 해당하는 값 : 예보
    // 배열.entries -> index 추출
    // * 일자별 예보 오브젝트 생성 (배열 두개 합쳐서 오브젝트로 만듦)
    let frcobj = {}; // 빈 오브젝트
    for(let [idx, k] of frcdt.entries()){
        console.log("idx=", idx, 'value=', k, 'cnvalue=', frccn[idx]);
        // key : k, 값 : idx
        frcobj[k] = frccn[idx];
    }
    console.log("frcobj : ", frcobj);

    // dt를 누르면 cn이 바뀌도록
    let [cn, setCn] = useState(frcobj["2023-02-02"]);
    let [dt, setDt] = useState();

    return (
        <>
            <Frcheader />
            {/* Frcdt에서 클릭하지만 부모가 가지고 있는 dt값이 바뀜. 확인용 p 태그 */}
            <p>{dt}</p>
            <div className="main">
                {/* 파라미터로 setDt 함수를 보내줌. 부모가 가지고 있는 setDt는 dt를 바꾸는 함수. 이걸 속성값으로 보냄 */}
                <Frcdt dt={frcdt} setDt={setDt}/>
                {/* dt가 변경되는 시점에 cn도 바뀌어야 함 */}
                <Frccn cn={cn}/>
            </div>
            
        

        </>
         
    ) ;
}

export default Frcst ;

