const Galcard = ({cardItem}) => {
    console.log("GalCard cardItem",cardItem);

    return(
        <div className="concard">
          <ul>
            <div><img src={cardItem.galWebImageUrl} /></div>
            <div>{cardItem.galTitle}</div>
            <div>{cardItem.galPhotographyMonth.substr(0,4)}.
                {cardItem.galPhotographyMonth.substr(2,2)}
            </div>
            <div>{cardItem.galPhotographer}</div>
            <div>{cardItem.galSearchKeyword}</div>
            
          </ul>
        </div>  
    );
}
export default Galcard;