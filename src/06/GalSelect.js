import data from '../db/data.json';
// import GalCard2 from './GalCard2';
import { useRef, useState, useEffect } from 'react';
import './Gal.css';
import GalCard from './GalCard';

const GalSelect = () => {
    //console.log(data);
    
    //데이터 가져오기
    const items = data.response.body.items.item;
    console.log(items);
    const c1 = items.map( (obj) => obj.galTitle )
    console.log("c1",c1);
    console.log("c1 entries",c1.map((v, k) => console.log(v,k) ));

    //let item0


    // 랜더링 제어 변수
    // [변수, 변수를 바꾸는 함수]
    // GalCard에 오브젝트가 넘어가야 하기 때문에 초기값 {} 빈 오브젝트
    const [selItem, SetSelItem] = useState();

    // select box 제어
    // useRef -> .current
    const selR = useRef();

    // 컴포넌트가 처음 랜더링이 일어났을 때
    useEffect(()=>{
        selR.current.focus();
        console.log(selR.current);
    },[]);

    const handleSel = (e) => {
        e.preventDefault();
        if(selR.current.value === "") return;
        console.log("onchange", selR.current.value);
        // 배열에서 원하는 항목 뽑기
        let temp = items.filter((k) => k.galTitle === selR.current.value);
        console.log("onchange temp",temp);
        SetSelItem(temp[0]);

    }

    // let optionTag = [
    //     <option key={c1[0]} value={c1[0]}>{c1[0]}</option>,
    //     <option key={c1[1]} value={c1[1]}>{c1[1]}</option>,
    // ];

    let optionTag= c1.map((i)=>
        <option key={i} value={i}>{i}</option>
    );

    //console.log(items);
    // const itemTag = items.map((item) => 
    //     <GalCard cardItem={item}/>
    // );

    // const item = {
    //     WebImageUrl : 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20230206_1095%2Fupload_1675648342737lYmZi.jpg%22&type=nf340_228' ,
    //     Title : '벤츠 GLE SUV',
    //     Month : '202302',
    //     Photographer : '부분변경과 동시에 모델 명도 ‘GLE SUV’로 변경 ',
    //     SearchKeyword : '자동차',
    // }

   

    return(
        <>
        {/* <div className='galselect'>
            {itemTag}
        </div> */}

        {/* <div>
            <GalCard cardItem={items[0]} />
        </div> */}

        {/* <div>
            <GalCard2 cardItem={item} />
        </div> */}

        <div>
            <form>
                <select ref={selR} name="sel1" onChange={handleSel}>
                    {/* <option value="{c1[0]}">{c1[0]}</option> */}
                    <option value="">항목을 선택하세요.</option>
                    {optionTag}
                </select>
                {/* useState()->undefined : false ,  19라인에 useState({}) 이렇게 쓰고 아래처럼 처리하면 오류남. 내용은 비어있지만 오브젝트가 있는것으로 인식해서 */}
                {selItem && <GalCard cardItem={selItem}/>}

                {/* 19라인에 useState({})-> 비어있지만 오브젝트가 있음. 오브젝트가 있는데 내용이 없을 때 
                    Object.keys 결과-> 오브젝트 */}
                {/* {Object.keys(selItem).length > 0 && <GalCard cardItem={selItem}/>} */}
            </form>
        </div>
           
        </>
    );
}
export default GalSelect;