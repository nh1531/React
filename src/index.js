import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode> console창에서 두번씩 결과 나옴. 두번씩 검증하는 모드 
  <App />
);

// setInterval(()=>{console.log('test')}, 1000); // 1초에 한번씩
// setInterval(()=>{root.render(<App />);}, 1000); // 시간부분만 다시 렌더링


//reportWebVitals(console.log);
