/* import React from 'react';

const EventFun = () => {
    return (//jsx문법
    <>
      <h1>이벤트 Practice</h1>
        <input 
          type="text" 
          name="message" 
          placeholder='입력'
          onChange={(e)=>{  // e:event객체, SyntheticBaseEvent객체
            //console.log(e);
            console.log(e.target.value);//직접 입력한 값을 표시
        }}
      />
    </>
  );
};

export default EventFun; */
/* import React, { useState } from 'react';

const EventFun = () => {
  const [msg,setMsg] = useState('');
  const [username,setUserName] = useState('');

  const handleKeyPress = (e)=>{
    if(e.key === 'Enter'){
      handleClick(e);
    }
  };
  const handleClick = (e) =>{
    if(e.target.name === 'msg')setMsg('');
    else setUserName('');
  };
  const handleChangeMsg = (e)=>{
    setMsg(e.target.value); 
  };
  const handleChangeUn = (e)=>{
    setUserName(e.target.value);
  };

    return (
    <>
    <h1>이벤트 Practice Function형</h1>
              <input 
                type="text" 
                name="msg" 
                placeholder='입력'
                value={msg}
                onKeyPress={handleKeyPress}
                onChange={handleChangeMsg}
            />
            <input 
                type="text" 
                name="username" 
                placeholder='이름입력'
                value={username}
                onKeyPress={handleKeyPress}
                onChange={handleChangeUn}
            />
            <div>{msg + " "+ username}</div>
            <button onClick={handleClick}>확인
            </button>
           
    </>
  );
};

export default EventFun; */
import React, { useState } from 'react';

const EventFun = () => {
  /* const [msg,setMsg] = useState('');
  const [username,setUserName] = useState(''); */
  
  const [jit,setJit] = useState({
    msg:'',
    username:'',
  });

  const {username,msg} = jit;

  const handleKeyPress = (e)=>{
    if(e.key === 'Enter'){
      handleClick(e);
    }
  };
  const handleClick = (e) =>{
    /* const newJit = {
      ...jit,
      [e.target.name]:'',
    } */
    const newJit = {msg:'',username:''};
    setJit(newJit);
  };
  const handleChange = (e)=>{
    const newJit = {
      ...jit,
      [e.target.name]:e.target.value,
    }
    setJit(newJit);
  };
  /* const handleChangeUn = (e)=>{
    setUserName(e.target.value);
  }; */

    return (
    <>
    <h1>이벤트 Practice Function형</h1>
              <input 
                type="text" 
                name="msg" 
                placeholder='입력'
                value={msg}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="username" 
                placeholder='이름입력'
                value={username}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
            />
            <div>{msg + " "+ username}</div>
            <button onClick={handleClick}>확인
            </button>
           
    </>
  );
};

export default EventFun;