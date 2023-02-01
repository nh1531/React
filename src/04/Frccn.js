const Frccn = ({cn}) =>{
    console.log("cn==", cn);
    let infoArry = cn.split(",");

    infoArry = infoArry.map((v) => 
        <li>
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