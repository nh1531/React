import { useState } from "react";


const Boxmain = () => {
    const mvlist = [
        {"rnum":"1","rank":"1","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20190808","movieNm":"교섭","openDt":"2023-01-18","salesAmt":"355906586","salesShare":"18.8","salesInten":"-147956429","salesChange":"-29.4","salesAcc":"12600296336","audiCnt":"36622","audiInten":"-23326","audiChange":"-38.9","audiAcc":"1234442","scrnCnt":"945","showCnt":"3700"},
        {"rnum":"2","rank":"2","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20228555","movieNm":"더 퍼스트 슬램덩크","openDt":"2023-01-04","salesAmt":"305669122","salesShare":"16.1","salesInten":"-106843585","salesChange":"-25.9","salesAcc":"17301443212","audiCnt":"30127","audiInten":"-19053","audiChange":"-38.7","audiAcc":"1673520","scrnCnt":"794","showCnt":"2474"},
        {"rnum":"3","rank":"3","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20225061","movieNm":"아바타: 물의 길","openDt":"2022-12-14","salesAmt":"395604792","salesShare":"20.9","salesInten":"-158772970","salesChange":"-28.6","salesAcc":"128917076050","audiCnt":"28262","audiInten":"-14218","audiChange":"-33.5","audiAcc":"10171549","scrnCnt":"661","showCnt":"1588"},
        {"rnum":"4","rank":"4","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20229551","movieNm":"상견니","openDt":"2023-01-25","salesAmt":"196995521","salesShare":"10.4","salesInten":"-179431122","salesChange":"-47.7","salesAcc":"573422164","audiCnt":"19635","audiInten":"-25089","audiChange":"-56.1","audiAcc":"64359","scrnCnt":"675","showCnt":"2086"},
        {"rnum":"5","rank":"5","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20229205","movieNm":"메간","openDt":"2023-01-25","salesAmt":"170788579","salesShare":"9.0","salesInten":"-46345424","salesChange":"-21.3","salesAcc":"390717582","audiCnt":"16955","audiInten":"-8684","audiChange":"-33.9","audiAcc":"42871","scrnCnt":"547","showCnt":"1669"},
        {"rnum":"6","rank":"6","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20214823","movieNm":"유령","openDt":"2023-01-18","salesAmt":"135407499","salesShare":"7.1","salesInten":"-41938529","salesChange":"-23.6","salesAcc":"4601480264","audiCnt":"13777","audiInten":"-7684","audiChange":"-35.8","audiAcc":"449528","scrnCnt":"724","showCnt":"1812"},
        {"rnum":"7","rank":"7","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20196478","movieNm":"영웅","openDt":"2022-12-21","salesAmt":"107470059","salesShare":"5.7","salesInten":"-32133825","salesChange":"-23","salesAcc":"29499625093","audiCnt":"11213","audiInten":"-5659","audiChange":"-33.5","audiAcc":"2987866","scrnCnt":"601","showCnt":"1118"},
        {"rnum":"8","rank":"8","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20224109","movieNm":"장화신은 고양이: 끝내주는 모험","openDt":"2023-01-04","salesAmt":"49019382","salesShare":"2.6","salesInten":"-78802","salesChange":"-0.2","salesAcc":"6738436897","audiCnt":"6082","audiInten":"630","audiChange":"11.6","audiAcc":"711504","scrnCnt":"332","showCnt":"409"},
        {"rnum":"9","rank":"9","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20228313","movieNm":"오늘 밤, 세계에서 이 사랑이 사라진다 해도","openDt":"2022-11-30","salesAmt":"49429844","salesShare":"2.6","salesInten":"-16882910","salesChange":"-25.5","salesAcc":"10112965111","audiCnt":"4868","audiInten":"-2184","audiChange":"-31","audiAcc":"980655","scrnCnt":"241","showCnt":"355"},
        {"rnum":"10","rank":"10","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20229518","movieNm":"천룡팔부: 교봉전","openDt":"2023-01-25","salesAmt":"15848197","salesShare":"0.8","salesInten":"-3804460","salesChange":"-19.4","salesAcc":"48516954","audiCnt":"1754","audiInten":"-482","audiChange":"-21.6","audiAcc":"5202","scrnCnt":"259","showCnt":"393"}
    ]

    // 클릭할 때마다 값이 바뀜 -> useState 사용
    let [dspmv, setDspmv] = useState({});

    const handleDivClick = (selmv) => {
        //console.log(selmv);
        setDspmv({...selmv}); // ... -> 전개연산자, 스프레드? 한개씩 꺼내서 다시 풀어서 넣어줌
        console.log(dspmv);
    }


    let divTags = []; // 빈 배열

    //배열에 1개씩 접근 for
    for(let mv of mvlist){
        // console.log(mv.rank, mv.movieNm, mv.salesAmt, mv.rankInten); // mv는 Object. Object의 key값 사용
        let inten = '-';
        if(mv.rankInten > 0) {
            inten = <span className="spup">{ '▲' + mv.rankInten }</span> ;
        }
        else if(mv.rankInten < 0){
            inten = <span className="spdown">{ '▼' + -(mv.rankInten) }</span>;
        }

        // 배열에 집어 넣는 것 push
        divTags.push(
            // key값은 유일하게 만들어야 함
            // 값 전달x -> 함수명만 쓰면 됨
            // 값을 전달시키고 싶을 땐 콜백함수 사용 -> onClick 사용할 때 클릭된 정보를 가지고 가고 싶음
            <div className="rowDiv" key={mv.movieCd} onClick={() => handleDivClick(mv)}>
                <span className="col1" id="colrank">{mv.rank}</span>
                <span className="col1" id="colmovieNm">{mv.movieNm}</span>
                <span className="col1" id="colsalesAmt">{parseInt(mv.salesAmt).toLocaleString('ko-KR')}</span>
                <span className="col1" id="colrankInten">{inten}</span>
            </div>
        ); 

    }


    return(
        <div className="content">
            <div className="rowDiv0">
                <span className="col1" id="colrank">순위</span>
                <span className="col1" id="colmovieNm">영화명</span>
                <span className="col1" id="colsalesAmt">매출액</span>
                <span className="col1" id="colrankInten">증감률</span>
            </div>
            {divTags} 
            <div className="rowDay">
                <strong>
                [{dspmv.movieNm}] 개봉일 : {dspmv.openDt}
                </strong>
                
            </div>
        </div>
    );
}

export default Boxmain;