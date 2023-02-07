import Galc1 from "./Galc1";
import Galboard from "./Galboard";
import './Gal.css';
import { useState, useEffect } from "react";

const Galmain = ({c1, item}) => {

    let [selC1, setSelC1] =  useState();

    let [selItem, setSelItem] = useState();

    useEffect(() => {
        console.log("selC1",selC1);
        setSelItem(item.filter((i)=>
            i.galTitle === selC1
            )[0])
    }, [selC1]);

    useEffect(() => {
        console.log("selItem", selItem);
    }, [selItem]);


    return(
        <>
        <div className="main">
            <Galc1 c1={c1} selC1={selC1} setSelC1={setSelC1}/>
            {selItem && <Galboard item={item} selItem={selItem} setSelItem={setSelItem} />}
        </div>


        {/* <div className="content">
            <div className="conleft">
                목록
                <ul>
                    <li>항목</li>
                </ul>
            </div>
            <div className="conright">
                상세내용
            </div>
        </div> */}
        
        </>
    );
}
export default Galmain;