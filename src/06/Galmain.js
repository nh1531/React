import './Gal.css';
import GalCard from './GalCard';
import { useState, useEffect, useRef } from 'react';

const GalMain = ({ c1, item }) => {
    //console.log("GalMain item", item) ;
    //console.log("GalMain c1", c1) ;

    const [selc1, setSelc1] = useState();
    const [cardItem, setCardItem] = useState();
    const txtR = useRef();

    // 맨 처음 한번 실행될 때 useRef에 포커스
    useEffect(() => {
        txtR.current.focus();
    }, []);

    useEffect(() => {
        console.log("selc1", selc1)
        //setCardItem(item.filter((i) => i["galTitle"] === selc1)[0]);
        setCardItem(item.filter((i) => i.galTitle === selc1)[0]);
    }, [selc1]);

    useEffect(() => {
        console.log("cardItem", cardItem)
    }, [cardItem]);

    const selItem = (i) => {
        setSelc1(i);
    }

    // 초기값 빈배열[]
    const [c1tag, setC1Tag] = useState([]);
    const showC1 = () => {
        console.log(txtR.current.value);
        // c1 카테고리 데이터 다 들어있음
        let temp = c1.filter((i) => i.includes(txtR.current.value))
        setSelc1('');
        // input 창에 검색하면 글자가 포함된 결과가 자동으로 나옴 (처음에 모든 목록이 떠있지 않음)
        setC1Tag(
            temp.map((i) =>
                <li className={i === selc1 ? 'ulis' : 'uli'}
                    onClick={() => selItem(i)}
                    key={i}>
                    {i}
                </li>));
    }
    


    // let c1tag = c1.map( (i) => 
    //         <li className={i === selc1 ? 'ulis' : 'uli'}
    //             onClick={() => selItem(i)}    
    //             key={i}> 
    //             {i} 
    //         </li>
    // ) ;

    return (
        <div className="content">
            <div className="conleft">
                <div>
                    <form>
                        {/* onChange 글자가 바뀔 때 마다 */}
                        <input ref={txtR} type="text" name="txt1" onChange={showC1} />
                        <button type='reset'>취소</button>
                    </form>
                </div>
                <ul>
                    {/* 컴포넌트로 보내면 c1 대신에 바뀐 배열을 보내주면 됨 */}
                    {c1tag}
                </ul>
            </div>
            <div className="conright">
                {cardItem && <GalCard cardItem={cardItem} />}
            </div>
        </div>
    );
}

export default GalMain;