import React, { Component } from 'react';

class StateComCls extends Component {
    // state 처리방법 1 - constructor에서 객체로 설정
    constructor(props){
        super(props);   // 반드시 먼저 호출되도록 구현해야 함

        this.state = { number : 0 }; 
        // {상태값명1:초기치1,상태값명2:초기치2,...}
    }
    render() {
        const {number,noproblem} = this.state;// 상태값 조회
        return (
            //JSX
            <>
            <h1>{ number }</h1> 
            <h2>{noproblem}</h2>
            <button 
                onClick={()=>{ 
                //prevState : 이전 상태값
                //비동기적으로 작동==>콜백함수로 작성
                this.setState((prevState)=>{
                    return {number: prevState.number+1}});
                this.setState((prevState)=>({
                    number:prevState.number + 1,
                }),
                ()=>{
                  console.log('상태변경완료.');
                }
                );
               // prevState => ({number:prevState.number + 1,});
               // this.setState({noproblem:noproblem + '일본취업'});
                
                }}
                >
             +1 
            </button>
            </>
        );
    }
}

export default StateComCls;