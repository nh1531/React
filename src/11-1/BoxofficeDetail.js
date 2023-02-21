import { useState, useEffect } from "react";

const BoxofficeDetail = (mvcd) => {
    //console.log("BoxofficeDetail",mvcd);

    const [mTag, setMTag] = useState();

    /*
    // 함수 앞에 async가 정의 되어야 await 사용가능
    const getData = async() => {
        let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${mvcd}`;

        try{
            const response= await fetch(url);
            const data = await response.json();

            
            let temp = data.movieInfoResult.movieInfo; // temp : object -> map 사용할 수 x
            const showitem = {
                "영화명" : "movieNm",
                "개봉일" : "openDt" ,
                "제작상태" : "prdtStatNm",
                "영화구분" : "typeNm",
                "감독" : "directors"
            }
            console.log("temp", temp);
            //console.log(data);

            // temp = Object.entries(temp); // 배열로 변환 -> map 사용o
            
            // temp = Object.entries(temp).map((item)=>{
            //     return(
            //         <div>
            //         </div>
            //     );
            // })
            

            if (mvcd) {
                let tag = [] 
                for(let [k, v] of Object.entries(showitem)) {
                    if ( k === "감독") {
                        tag.push(<div className="dtdiv" key={k}>
                            <span className="dtsp1">{k}</span>
                        </div>)
                    }
                    else {
                        tag.push(<div className="dtdiv" key={k}>
                            <span className="dtsp1">{k}</span>
                        </div>)
                    }
                    //console.log("tag", k, selmv[v])
                };
                setMTag(tag);
            } 
        }
        catch(err){
            console.log(err);
        }
    } */
   
    

    useEffect(()=>{
        let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&'
        url = url + `movieCd=${mvcd}`;

        //console.log("mvcd",mvcd);
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            let temp = [] ;
            temp.push(data.movieInfoResult.movieInfo.movieNm) ;
            temp.push(data.movieInfoResult.movieInfo.openDt) ;
            temp.push(data.movieInfoResult.movieInfo.prdtStatNm) ;
            temp.push(data.movieInfoResult.movieInfo.typeNm) ;
            setMTag(
                <div className="detail" key={temp[0]}>
                    <div className="div1"><span className="dcol1">영화명</span>
                                          <span className="dcol2">{temp[0]}</span></div>
                    <div className="div1"><span className="dcol1">개봉일</span>
                                          <span className="dcol2">{temp[1]}</span></div>
                    <div className="div1"><span className="dcol1">제작상태</span>
                                          <span className="dcol2">{temp[2]}</span></div>
                    <div className="div1"><span className="dcol1">영화구분</span>
                                          <span className="dcol2">{temp[3]}</span></div>
                </div> 
            ) ;
        })
        .catch((err)=>console.log(err))
    },[mvcd]);
    
    return(
        <>
        {mvcd && mTag}
        </>
    );
}
export default BoxofficeDetail;