import { useState, useEffect } from "react";

const BoxofficeDetail = (mvcd) => {
    //console.log("BoxofficeDetail",mvcd);

    const [mTag, setMTag] = useState();

    // 함수 앞에 async가 정의 되어야 await 사용가능
    const getData = async() => {
        let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${mvcd}`;

        try{
            const response= await fetch(url);
            const data = await response.json();

            
            let temp = data.movieInfoResult.movieInfo; // temp : object -> map 사용할 수 x
            let ttag = 
                <div>
                    <span>영화명</span>
                    <span>{temp.movieNm}</span>
                </div>
            //ttag = ttag + 



            // temp = Object.entries(temp); // 배열로 변환 -> map 사용o
            /*
            temp = Object.entries(temp).map((item)=>{
                return(
                    <div>
                    </div>
                );
            })
            */
            console.log("temp", temp);
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
       

    }

    useEffect(()=>{
        console.log("mvcd",mvcd);
        getData();
    },[mvcd]);
    
    return(
        <>
        {mvcd && mTag}
        </>
    );
}
export default BoxofficeDetail;