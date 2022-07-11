/* import React, { Component } from 'react';

class EventExcls extends Component {
    state = {
        msg:'',
    }
    render() {
        return ( //jsx 문법
            <>
            <h1>이벤트 Practice class형</h1>
              <input 
                type="text" 
                name="message" 
                placeholder='입력'
                value={this.state.msg}
                onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        alert(this.state.msg);
                        this.setState({msg:''});
                    }
                }}
                onChange={(e)=>{  // e:event객체, SyntheticBaseEvent객체
                  //console.log(e);
                  console.log(e.target.value);//직접 입력한 값을 표시
                  this.setState({msg:e.target.value});
              }}
            />
            <div>{this.state.msg}</div>
            <button onClick={(e)=>{
                alert(this.state.msg);
                this.setState({msg:''});
            }}>확인
            </button>
          </>
        );
    }
}

export default EventExcls; */
/* import React, { Component } from 'react';

class EventExcls extends Component {
    state = {
        msg:'',
    };
    handleKeyPress(e){ // this에 문제가 있다.
        if(e.key === 'Enter'){
            alert(this.state.msg);
            this.setState({msg:''});
        }
    }
    handleChange(e){
        // e:event객체, SyntheticBaseEvent객체
        //console.log(e);
        console.log(e.target.value);//직접 입력한 값을 표시
        this.setState({msg:e.target.value});
    }
    handleClick(e){
        alert(this.state.msg);
        this.setState({msg:''});
    }
    render() {
        return ( //jsx 문법
            <>
            <h1>이벤트 Practice class형</h1>
              <input 
                type="text" 
                name="message" 
                placeholder='입력'
                value={this.state.msg}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
            />
            <div>{this.state.msg}</div>
            <button onClick={this.handleClick}>확인
            </button>
          </>
        );
    }
}

export default EventExcls; */

/* import React, { Component } from 'react';
// this 문제 해결법 1 : bind 사용
class EventExcls extends Component {
    state = {
        msg:'',
    };
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        //bind란? 묶는다는 뜻으로 함수를 실행할때 this를 EventExcls로 묶는다
    }
    handleKeyPress(e){ // this에 문제가 있다.
        if(e.key === 'Enter'){
            alert(this.state.msg);
            this.setState({msg:''});
        }
    }
    handleChange(e){
        // e:event객체, SyntheticBaseEvent객체
        //console.log(e);
        console.log(e.target.value);//직접 입력한 값을 표시
        this.setState({msg:e.target.value});
    }
    handleClick(e){
        alert(this.state.msg);
        this.setState({msg:''});
    }
    render() {
        return ( //jsx 문법
            <>
            <h1>이벤트 Practice class형</h1>
              <input 
                type="text" 
                name="message" 
                placeholder='입력'
                value={this.state.msg}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
            />
            <div>{this.state.msg}</div>
            <button onClick={this.handleClick}>확인
            </button>
          </>
        );
    }
}

export default EventExcls; */

/* import React, { Component } from 'react';
// this 문제 해결법 2 : 화살표함수 이용
class EventExcls extends Component {
    state = {
        msg:'',
    };
    handleKeyPress = (e)=>{ // this에 문제가 있다.
        if(e.key === 'Enter'){
            alert(this.state.msg);
            this.setState({msg:''});
        }
    }
    handleChange=(e)=>{
        // e:event객체, SyntheticBaseEvent객체
        //console.log(e);
        console.log(e.target.value);//직접 입력한 값을 표시
        this.setState({msg:e.target.value});
    }
    handleClick=(e)=>{
        alert(this.state.msg);
        this.setState({msg:''});
    }
    render() {
        return ( //jsx 문법
            <>
            <h1>이벤트 Practice class형</h1>
              <input 
                type="text" 
                name="message" 
                placeholder='입력'
                value={this.state.msg}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
            />
            <div>{this.state.msg}</div>
            <button onClick={this.handleClick}>확인
            </button>
          </>
        );
    }
}

export default EventExcls; */

import React, { Component } from 'react';
// input태그 여러개일때 하나의 이벤트핸들러로 처리하기
class EventExcls extends Component {
    state = {
        msg:'',
        username:'',
    };
    handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            this.handleClick(e);
        }
    }
    handleChange=(e)=>{
        this.setState({msg:e.target.value});
        this.setState({[e.target.name] : e.target.value});
    }
    handleClick=(e)=>{
        this.setState({[e.target.name]:e.target.value});
       
    }//[e.target.name] <- 변경되는 이벤트마다 다른 값 호출
    render() {
        return ( //jsx 문법
        // setState() 사용 xx
            <>
            <h1>이벤트 Practice class형</h1>
              <input 
                type="text" 
                name="msg" 
                placeholder='입력'
                value={this.state.msg}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
            />
            <input 
                type="text" 
                name="username" 
                placeholder='이름입력'
                value={this.state.username}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
            />
            <div>{this.state.msg + " "+ this.state.username}</div>
            <button onClick={this.handleClick}>확인
            </button>
          </>
        );
    }
}

export default EventExcls;

//register 作る