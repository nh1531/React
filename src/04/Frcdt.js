const Frcdt = ({frcdt, setDt}) =>{
    console.log("frcdt-dt==",frcdt);
    // probs로 받으면 속성명을 probs.속성명 이렇게 받아야 함
    // 속성의 이름을 그대로 쓰려면 오브젝트{}로 받아야 함

    //console.log("frcdt === ", probs.frcdt);

    // probs에서 전달된 갯수만큼 돌아야 함
    let dtdiv1Tag = [...frcdt]; // 스프레드 연산자
    console.log("setDt", setDt);
    
    const show = (v) => {
        // 날짜 클릭시 console창으로 들어옴
        console.log("show", v);
        setDt(v); // 부모에 있는 날짜가 바뀜
    }

    
    dtdiv1Tag = dtdiv1Tag.map((v)=>
        <div className="dtdiv1" key={v} onClick={()=> show(v)}>{v}</div>
    );
    console.log("frcdt",dtdiv1Tag);

    return(
        <div className="mainbox1">
            {dtdiv1Tag}
        </div>
    );

}
export default Frcdt;