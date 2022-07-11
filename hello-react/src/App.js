import React, { Component } from 'react';
import EventExcls from './EventExcls';
import EventFun from './EventFun';
import FuncMyCom from './FuncMyCom';
import MapTestComFun from './MapTestComFun';
import MyCom from './MyCom';
import ScrollBoxRef from './ScrollBoxRef';
import StateComCls from './StateComCls';
import StateComFun from './StateComFun';
import ValidateRef from './ValidateRef';
import IterateComFn from './IterateComFn';
import LifeCycleCls from './LifeCycleCls';
import ErrorLifeCycleCls from './ErrorLifeCycleCls';

const getRandColor = () => {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
  // ffffff(16진수) : 6777215(10진수);
}

//아니 앞에 대문자 안하면 useState에러 에바야~

class App extends Component {
    state = { color:'#000000' };
    onClick = (e) => {
      this.setState({
        color:getRandColor()
      });
    };
    render() { // function render(){ }
        const name = 'react';
        return ( 
          <>
            {/* <div className='react'>{name}</div>;
            <MyCom name = '김영진' hakbun = '1901013' major = '컴퓨터정보계열'>
              아아
            </MyCom>
            <FuncMyCom name = '최영진' age = "22" gender='남' roomnum='702'></FuncMyCom>
            <FuncMyCom age = '22' gender='남' roomnum='702'>
              확인
            </FuncMyCom>
            <StateComCls></StateComCls>
            <StateComFun></StateComFun>
            <EventFun></EventFun>
            <EventExcls></EventExcls>
            <ValidateRef></ValidateRef>
            <ScrollBoxRef 
            ref={ (ref)=>{ 
              this.scrollBox = ref;}}
              ></ScrollBoxRef>
            <button 
            onClick={(e)=>{
              this.scrollBox.ScrollBoxBottom()}}
              >
                맨밑으로
              </button>
            <ScrollBoxRef></ScrollBoxRef>
            <MapTestComFun></MapTestComFun>
            <IterateComFn></IterateComFn> */}
            <div>
            <button onClick={this.onClick}>랜덤색상</button>
            <ErrorLifeCycleCls>
              <LifeCycleCls color = {this.state.color}></LifeCycleCls>
            </ErrorLifeCycleCls>
            </div>
          </>
          );
    }
}

export default App;