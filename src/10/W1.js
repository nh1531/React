import Wheader from "./Wheader";
import keys from '../db/item.json';
import weather2 from '../db/weather2.json';

const W1 = () => {
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

    return(
        <>
            <div className="content">
                <Wheader title={'일기예보-단기'} />
                <div>
                    <div className="w1div">
                        <span className="sp0">강수량</span>
                        <span className="sp1">0</span>
                        <span className="sp2">mm</span>
                    </div>
                </div>

            </div>
        </>
    );
}
export default W1;