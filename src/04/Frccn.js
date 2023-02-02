const Frccn = ({dt, cn}) =>{
    console.log("cn==", cn);
    let infoArry = cn.split(",");
    let kn = 0;

    infoArry = infoArry.map((v) => 
        <li key={dt + kn++}>
            <span>{v.split(':')[0]}</span> (
            {
            v.includes('높음') ? 
            <span className='lired'>{v.split(':')[1]}</span> :
            <span>{v.split(':')[1]}</span> 
            } 
            )
        </li>
    ); 
    return(
        <div className="mainbox2">
            <div className='detail'>
                <ul>{infoArry}</ul>
            </div>
        </div>
    );

}
export default Frccn;