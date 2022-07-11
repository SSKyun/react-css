import React, { useState } from 'react';
// 사전지식
// 배열의 구조분해 할당
/* const arr = [1,2];
const one = arr[0];
const two = arr[1];
// ==>
const arr1 = [1,2];
const [one,two] = arr1; */


const StateComFun = () => {
    const [number, setNumber] = useState(0);
    const [noproblem,setnoproblem] = useState('');
    // 상태 선언 및 초기화 : 
    // const [상태명, 상태변경Setter함수명] = useState(초기값);
    return (
        <>
          <h1>{number}</h1>
          <h1>{noproblem}</h1>
          
          <button 
                onClick={()=>{ 
                  setNumber(number+1); // 상태변화는 직접적으로 변경하면 안된다.
                  //setter 함수를 이용하여 간접적으로 변경해야함.
                  setnoproblem(noproblem+'일본취업만이 살길이다.');
                }}
                >
             +1(function)
            </button> 
            
        </>
    );
};

export default StateComFun;