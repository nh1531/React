import logo from './logo.svg';
import './App.css';

// 첫글자 대문자로 시작. 파일명과 태그명이 같아야 함
// App -> 내가 정의한 태그
const App = () => {
  console.log('App.js');
  // 사용자 정의 태그는 return(); 이 반드시 있어야 함. return 안에는 태그<>가 들어가야 함. 1개만 들어갈 수 있음 
  // 여기서는 div 태그. 나머지 안에 있는건 자식. 자식은 상관없음
  return (
    // class가 아니라 className으로 써야 함
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

/* 
// div 태그 두개 넣고 싶은데 태그가 하나만 들어가서 밖에 하나의 태그로 싸면 그것도 보임
// <> </> 이렇게 빈 태그로 만들면 console 창에서 elements 봤을 때 빈 태그는 안보이고 안에 내용만 보임
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        App.js : Hello world!
      </div>
      <div> 
        <p>App.js : Hello world!</p>
      </div>

    </>
*/
  );
}

export default App;
