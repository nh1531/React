import { useState, useEffect } from "react";

const BoxofficeList = ({tDt}) => {
    //({tDt}) -> Boxoffice.js 에서 넘기는 속성 이름을 넘겨야 함. key값
    //console.log("BoxofficeList",tDt);

    const [mvlist, setMvlist] = useState();

    // 맨처음 랜더링 시
    useEffect(()=>{
        if (!tDt) return; // targetDt=undefined 

        //바뀔 수 있는 부분은 변수로 따로 만들기
        const apikey = 'f5eef3421c602c6cb7ea224104795888';
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`

        console.log(url)

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // boxOfficeResult.dailyBoxOfficeList
        })
        .catch((err) => console.log(err)) // 오류
    }, []);




    return(
        <>
            <div>
                <div>
                    {tDt && mvlist}
                </div>
                <div>
                    상세
                </div>
            </div>
        </>
    );
}
export default BoxofficeList;