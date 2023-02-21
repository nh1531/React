import { useEffect, useState, useRef } from "react";
import './AIHub.css' ;

const AIHubWiki = () => {
    const txtQ = useRef() ;
    const formR = useRef() ;

    const [result, setResult] = useState(); 
    const [question, setQuestion]  = useState(); 
   
    const getData = (e) => {
        e.preventDefault(); 
        setQuestion(txtQ.current.value) ;

        
    }

    useEffect(()=>{
        if (!question) return ;
        const access_key = '본인API';
        let type = 'ENGINE_TYPE';

        let requestJson = {
            'argument': {
                'question': question,
                'type': type
            }
        };

        console.log(requestJson)

        fetch('http://aiopen.etri.re.kr:8000/WikiQA', {
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
            setResult(data.return_object.WiKiInfo.AnswerInfo[0].answer)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        formR.current.reset() ;


    }, [question])
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
                {result}
                </div>
            </div>
        </div>
    );
}

export default AIHubWiki ;