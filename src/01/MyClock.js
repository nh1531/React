const MyClock = () => {
    const d =new Date().toLocaleTimeString()
    return(
        <div>현재 시간 : {d} </div>
    );

}

export default MyClock;