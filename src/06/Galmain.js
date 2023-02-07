import Galcard from './Galcard';
import './Gal.css';
import { useState, useEffect } from 'react'; 

const Galmain = ({c1, item}) => {
    console.log("Galmain item", item);
    console.log("Galmain c1", c1);


    const [selc1, setSelC1] = useState(c1[0]); // 선택된 카테고리
    const [cardItem, setCardItem] = useState(); // 선택된 항목 오브젝트

    //selc1이 변경될 때마다 실행
    useEffect(()=>{
        // selc1이 바뀌니까 useEffect 자동호출-2
        console.log("selc1", selc1);
        // i.galTitle key값을 알고 있을 때 바로 쓰는 경우 = i["galTitle"] 문자열 변수로 사용할 경우
        // filter의 결과는 배열
        setCardItem( item.filter((i)=> i.galTitle === selc1)[0] );
    }, [selc1]);

    useEffect(()=>{
        console.log("cardItem", cardItem);
    }, [cardItem]);

    const selItem = (i) => {
        setSelC1(i); // 클릭하면 값이 바뀜-1
    }

    let c1tag = c1.map((i) =>
        <li className={i === selc1 ? 'ulisel' : 'uli'}
            onClick={() => selItem(i)}
            key={i}>
            {item} 
        </li>    
    );

    return(
        <div className="content">
            <div className="conleft">
                <ul>
                   {c1tag}
                </ul>
            </div>
            <div className="conright">
                {cardItem && <Galcard cardItem={cardItem}/>}
            </div>
        </div>  
    );
}
export default Galmain;