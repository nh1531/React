const Galboard = ({item, selItem, setSelItem}) => {

    console.log(selItem);

    let imgurl = selItem.galWebImageUrl;
    let img = <img src={imgurl} className="img" alt="logo" />

    let bTag=[];
    if (Object.keys(selItem).length > 0) {
        let keys = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];
        bTag = keys.map((k)=>
            <span className={k} key={[...k]}>{selItem[k]}</span>
        );
    }
  
    return(
        <>
        <div className="gboard">
            {imgurl && img}
            {bTag}
        </div>
        </>
    );
}
export default Galboard;