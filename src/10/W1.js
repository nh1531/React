import Wheader from "./Wheader";
import keys from '../db/item.json';
import weather2 from '../db/weather2.json';
import { useState, useEffect } from "react";

const W1 = () => {

    // useState() -> undefined => false 값
    // useState -> useEffect 사용 가능
    // state 변수
    const [items, setItems] = useState();
    const [itemTag, setItemTag] = useState();

    // useEffect
    // 랜더링이 발생될 때마다 실행 (어떤 state 변수던지 상관없이)
    // useEffect(()=>{});

    // useEffect(()=>{}, []);
    // 맨 처음 컴포넌트 랜더링 시 실행 -> db 받아오기
    useEffect(()=>{
        //console.log("weather2",weather2.response.body.items.item);
        setItems(weather2.response.body.items.item); // items에 저장 -> setItems로 저장
    }, []);

    // 특정 state 변수 변경시 실행
    // [state 변수명]
    useEffect(()=>{
        // items -> undefined (false)
        // !items -> true
        if (!items) return; 

        console.log("items", items);
        //8개 나오도록
        // i : Object, n : index 
        // map에서 변수 2개 들어가면 뒤가 index
        let temp = items.map((i,n) =>
            //console.log(`i=${i} n=${n}`)
            <div className="w2div" key={"w2div" + n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>
        );
        setItemTag(temp);

        /*
        temp 없이 setItemTag에 바로 넣어도 됨
        setItemTag(
            items.map((i,n) =>
            <div className="w2div">
                <span className="sp0">{i.category}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{i.category}</span>
            </div>
        );
        */
    }, [items]);
    

    /*
    let items = weather2.response.body.items.item; // [{},{}]
    console.log("weather2",weather2);
    console.log("keys",keys);
    console.log("items", items);

    //let w2 = items.map((i) => retrun i.category); // 값이 1개씩만 나옴

    //items.map( () => { retrun } )
    let w2 = items.map((i)=>{
        let temp = [];
        temp.push(keys[i.category][0]); //pty:[,] [0] -> 강수량
        temp.push(i.obsrValue);
        temp.push(keys[i.category][1]); // [1] -> mm

        return temp;
    });
    console.log("w2", w2);

    // let w2 = [items.category, items.obsrValue]
    // console.log("w2", w2);
    */

    return(
        <>
            <div className="content">
                <Wheader title={'일기예보-단기'} />
                {items && itemTag}
            </div>
        </>
    );
}
export default W1;