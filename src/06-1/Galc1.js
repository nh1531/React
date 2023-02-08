const Galc1 = ({c1, selC1, setSelC1}) => {

    const handleSelect = (i) => {
        setSelC1(i); 
    }

    const c1Tag = c1.map((i) =>
        <div className={i === selC1 ? "gcardSel" : "gcard"}
                key={i}
                onClick={()=> handleSelect(i)}>
            {i}
        </div>
    ) ;

    //console.log("c1Tag", c1Tag);

    return(
        <>
        <div className="gc1">
            {c1Tag}
        </div>
        </>
    );
}
export default Galc1;