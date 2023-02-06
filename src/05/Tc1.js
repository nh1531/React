const Tc1 = ({c1, selC1, setSelC1}) =>{
    //console.log("c1 == ", c1);

    // tcard에서 선택된 대분류가 selC1으로 들어감. 선택되면 selC1이 변경됨. 선택은 onClick 이벤트

    // ** 대분류가 클릭되었을 때 
    // item이 넘어갔지만 i로 받아도 됨. 이름은 상관없음
    const handleSelect = (item) => {
        setSelC1(item); 

    }

    // ** 대분류 화면 표시 태그
    const c1Tag =  c1.map((item) =>
        // 조건에 따라 스타일시트 변경. 뭐를 선택했는지 화면에 표시됨
        // selC1 클릭할 때마다 바뀜
        <div className={item === selC1 ? "tcardSel" : "tcard"} 
            key={item}
            onClick={() => handleSelect(item)}>
            {item}
        </div>
    );

    return(
        <div className="tc1">
            <h2>대분류</h2>
            {c1Tag}
        </div>
    );

}
export default Tc1;