import { useEffect, useState, useRef } from "react";
import './AIHub.css' ;

const AIHub = () => {
    const txtQ = useRef() ;
    const formR = useRef() ;

    const [result, setResult] = useState(); 
    const [resultTag, setResultTag] = useState(); 
    const [question, setQuestion]  = useState(); 
   
    const getData = (e) => {
        e.preventDefault(); 
        setQuestion(txtQ.current.value) ;

        
    }

    useEffect(()=>{
        if (!question) return ;
        const access_key = '본인api';
        let type = 'ENGINE_TYPE';

        let requestJson = {
            'argument': {
                'question': question,
                'type': type
            }
        };

        console.log(requestJson)

        fetch('http://aiopen.etri.re.kr:8000/LegalQA', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': access_key,
            },
            body: JSON.stringify(requestJson),
            })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setResult(data.return_object.LegalInfo.AnswerInfo)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        formR.current.reset() ;


    }, [question])

    useEffect(()=>{
        if (!result) return;
        let temp = result.map((i, n)=>
            <div className="divr2" key={"divr2" +n}>
                <span>순위 : {i.rank}</span>
                <span>정답 : {i.answer}({Math.round(i.confidence * 100,2)}%)</span>
                <span>출처 : {i.source}</span>
                <span>내용 : {i.clause}</span>
            </div>
        );
        setResultTag(temp);
    }, [result]);

    return (
        <div className="content">
            <div className="divf">
                <form ref={formR}>
                    <input type='text' ref={txtQ} />
                    <button onClick={getData}>질문하기</button>
                </form>
            </div>
            <div className="divq">
                {question}
            </div>
            <div className="divr">
                <div className="divr2">
                {resultTag}
                </div>
            </div>
        </div>
    );
}

export default AIHub ;