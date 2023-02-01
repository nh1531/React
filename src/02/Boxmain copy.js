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
    console.log(mvlist);
    
// 배열 [값, 값, ..] 위치값으로 구분 . a[1-> 숫자] , for ( of )
// 오브젝트 {key:값, ...} a[키] , for( 키, 값 of Object.entries ) -> 키, 값을 둘 다 가져올 수 있음


    // 배열 1개씩 찍기 item of...
    // item in 을 쓰면 key값만 나옴 

    /*
    for (let item of mvlist){
        console.log(item); // Object
        for (let [k,v] of Object.entries(item)){
            // console.log(mv); // 키값만 나옴
            console.log(k,v);
        }
    }
    */

    let divTags = []; // 빈 배열
    // case 5 -> map 사용. 추천방법
    const klist = ['rank', 'movieNm', 'salesAmt','rankInten']
    for (let item of mvlist){ // item -> Object
        let temp = []; // 배열
        console.log(item);
        // case 5
        // 각자 다른 key값이 필요해서(콘솔창 오류) 태그 안에 key값 넣음
        temp = klist.map((k) => <span key={item.movieCd + k} className='col' id={`col${k}`}>{item[k]}</span>); // 새로운 배열 4개 생성
        // console.log(temp);
        
        divTags.push(<div key={item.movieCd} className="rowDiv">{temp}</div>) // push 10번
        console.log(divTags);
    }

    /*
    for (let item of mvlist){
        let klist = ['rank', 'rankInten', 'movieNm', 'salesAmt']
        console.log(item);
        // case 5 
        // 배열.map(콜백함수)
        // item[k]->키값을 가지고 와서 새로운 배열을 만듦
        // k는 변수명. 아무거나 와도 상관없음. klist에 있는 값을 하나씩 가지고 오는것
        // map은 새로운 배열을 만드는것. 배열의 개수만큼 배열이 나옴
        // klist 배열, 개수만큼 새로운 배열이 생성. 4개
        klist = klist.map((k) => item[k]);
        console.log(klist);
    }
    */

    /*
    // case 4
    const klist = ['rank', 'rankInten', 'movieNm', 'salesAmt']
    for (let item of mvlist){
        console.log(item.rank); // Object.key값 가져올 수 있음
        console.log(item.rankInten); 
        console.log(item.movieNm); 
        console.log(item.salesAmt); 
        
    }
    */

    /*
    // case 3 
    const klist = ['rank', 'rankInten', 'movieNm', 'salesAmt']
    for (let item of mvlist){
        console.log(item); // Object
        // 4번만 돌면 됨
        for(let k of klist){
            console.log(k, item[k])
        }
    }
    */

    /*
    case 2 -> klist.includes / Object 전체를 다 돌아야 함
    const klist = ['rank', 'rankInten', 'movieNm', 'salesAmt']
    for (let item of mvlist){
        console.log(item); // Object
        for (let [k,v] of Object.entries(item)){
            if (klist.includes(k)) {
                console.log(k,v)
            }
        }
    }
    */

    /*
    case 1 -> || 잘 안씀
    for (let item of mvlist){
        console.log(item); // Object
        for (let [k,v] of Object.entries(item)){
            if(k == 'rank' || k == 'rankInten' || k == 'movieNm' || k == 'salesAmt')
            console.log(k,v);
        }
    }
    */


    return(
        <div className="content">
            <div className="rowDiv">
                <span className="col1" id="colrank">순위</span>
                <span className="col1" id="colmovieNm">영화명</span>
                <span className="col1" id="colsalesAmt">매출액</span>
                <span className="col1" id="colrankInten">증감률</span>
            </div>
            
            {divTags} 
        </div>

    );
}

export default Boxmain;