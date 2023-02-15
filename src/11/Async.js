const Async = () => {

    const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';
    fetch(url)
    //.then((resp) => console.log(resp)) // Fulfilled

    // 첫번째 .then이 끝나야 두번째 .then을 함
    // response 데이터 -> json 형태로 변경
    .then((resp)=> resp.json())
    .then((data) => console.log(data)) // Object 형태
    .catch((err) => console.log(err)) // Rejected



    return(
        <>
        </>
    );
}
export default Async;
