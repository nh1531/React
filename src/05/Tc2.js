const Tc2 = ({c2, selC2A, selC2, setSelC2}) =>{
    //console.log("c2 == ", c2);

    // ** 중분류가 클릭되었을 때 
    const handleSelect = (item) => {
        console.log(item);
        setSelC2(item[1]);

    }

    // ** 중분류 화면 표시 태그
    const c2Tag = selC2A.map((item) =>
        <div className={item[1] === selC2 ? "tcardSel" : "tcard"} 
            key={[...item]}
            onClick={() => handleSelect(item)}>
            {item[1]}
        </div>
    );

    return(
        <div className="tc2">
            <h2>중분류</h2>
            {c2Tag}
        </div>
    );

}
export default Tc2;