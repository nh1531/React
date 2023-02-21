import { useState, useEffect } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({tDt}) => {
    //({tDt}) -> Boxoffice.js 에서 넘기는 속성 이름을 넘겨야 함. key값
    //console.log("BoxofficeList",tDt);

    const [mvlist, setMvlist] = useState();
    const [mvcd, setMvCd] = useState();


    // 영화 클릭시 상세페이지
    const showDetail = (cd) => {
        console.log(cd);
        setMvCd(cd);

    }

    // 맨처음 랜더링 시
    useEffect(()=>{
        //console.log("tDt",tDt);
        //if (!tDt) return; // targetDt=undefined 

        //바뀔 수 있는 부분은 변수로 따로 만들기
        const apikey = 'f5eef3421c602c6cb7ea224104795888';
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`;

        //let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?
        //url = url + `key=${apikey}&`;
        //url = url + `targetDt=${tDt}`;

        console.log(url)

        // fetch(url) -> promise 반환
        // response.json() -> promise 가 다음줄의 .then으로 들어감
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.boxOfficeResult.dailyBoxOfficeList)
            let temp = data.boxOfficeResult.dailyBoxOfficeList;
            // map에서 {} -> return을 반드시 써야 함. return으로 묶어 줘야 함. retrun(<div>rank</div>). 가공해서 쓰고 싶을 때
            // map에서 return 하는 것만 있으면 {중괄호} 생략 가능
            // temp = temp.map(()=>{}); map 안에 콜백함수

            setMvlist (temp.map((item)=>
                        <div className="mvitem" key={item.movieCd} onClick={() => showDetail(item.movieCd)}>
                            <span className="mvitem1" >{item.rank}</span>
                            <span className="mvitem2">{item.movieNm}</span>
                            <span className="mvitem3">{item.salesAmt}</span>
                            <span className="mvitem4">{parseInt(item.audiCnt).toLocaleString('kr-ko')}</span>
                        </div>
            ));            
        })
        .catch((err) => console.log(err)) // 오류났을 시
    }, [tDt]);

    useEffect(() =>{
        console.log(mvlist)
    }, [mvlist] );

    return(
        <div className="mvcontent">
            <div className="mvlist">
                <div className="mvrow">
                    <span className="mvcol1"></span>
                    <span className="mvcol2">영화명</span>
                    <span className="mvcol3">매출액</span>
                    <span className="mvcol4">관객수</span>
                </div>
                
                {tDt && mvlist}
            </div>
            <div className="mvdetail">
                {mvcd && <BoxofficeDetail mvcd={mvcd}/>}
            </div>
        </div>
       
    );
}
export default BoxofficeList;