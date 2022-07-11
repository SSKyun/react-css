/* import React, { Component } from 'react';
import './ValidateExRef.css';

class ValidateRef extends Component {
  state = {
    password:'',
    clicked:false,
    validated:false,
  };
  onChange = (e) => {
    this.setState({ password:e.target.value});
  };
  inputRef = React.createRef();//수정
  onClick = (e) => {
    this.setState(
      {
        clicked:true,
        validated: this.state.password === '1234'
      });
      this.inputRef.current.focus(); //수정
  };
  render() {
      return (
          <>
          <br/>
            <input 
              type="password"
              ref={this.inputRef}//수정
              value={this.state.password}
              onChange={this.onChange}
              className={this.state.clicked?(
                  this.state.validated
                  ?'success'
                  :'failure'
                  ):''
                }   
              />
              <button onClick={this.onClick}>
                검증
              </button>
            </>
        );
    }
}

export default ValidateRef; */
import React, { Component } from 'react';
import './ValidateExRef.css';

class ValidateRef extends Component {
  state = {
    password:'',
    clicked:false,
    validated:false,
  };
  onChange = (e) => {
    this.setState({ password:e.target.value});
  };
  //inputRef = React.createRef();//수정
  onClick = (e) => {
    this.setState(
      {
        clicked:true,
        validated: this.state.password === '1234'
      });
      this.inputRef.focus(); // 수정
      //this.inputRef.current.focus(); //수정
  };
  render() {
      return (
          <>
          <br/>
            <input 
              type="password"
              //ref={this.inputRef}//수정
              ref={(ref)=>{this.inputRef = ref;}} // 수정
              value={this.state.password}
              onChange={this.onChange}
              className={this.state.clicked?(
                  this.state.validated
                  ?'success'
                  :'failure'
                  ):''
                }   
              />
              <button onClick={this.onClick}>
                검증
              </button>
            </>
        );
    }
}

export default ValidateRef;