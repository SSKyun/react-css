//import React,{Fragment} from "react";
import { Fragment } from 'react';
import "./App.css";


function App() {
  //함수형 컴포넌트 작성: App컴포넌트
  const name = undefined;
  const number = false;
  const styleObj = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '34px',
    fontWeight: 'bold',
    padding: 16,
  };
  return (
    //JSX 객체, JSX의 문법 // JSX의 주석
    //name || '값이 undefined 입니다'
    //{/* 주석 처리 */}
    //<Fragment></Fragment> 틀 잡아주기
    <div style={styleObj}>
      <>{name || '리엑트'}</>
      {/* // 리엑트값을 default로 출력시키지 */}
      <h1>{name}리액트 안녕!</h1>
      <h2>잘 봐라.</h2>

      <>
        <h1>{name}리액트 안녕!</h1>
        <h2>잘봐라 작동되는지</h2>
      </>

      <div className="reactTest">
        {name === 'react2' ? (
          <h1>리엑트입니다.</h1>
        ) : (
          <h2>리엑트가 아닙니다.</h2>
        )}
      </div>

      <>
        {name === 'react2' ? <h1>리엑트</h1> : null}
        {name === 'react2' && <h1>리엑트</h1>}
        {number && <h1>보임??</h1>}
      </>
    </div>
  );
}

export default App;
//module.exports = App;
