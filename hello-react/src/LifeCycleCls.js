import React, { Component } from 'react';


class LifeCycleCls extends Component {
    /* state = {
        number: 0,
        color:null
    }; */

    myRef = null;


    constructor(props){
        super(props);
        this.state = {
            number : 0,
            color : null
        }
        console.log("생성자");
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(" getDerivedStateFromProps 호출");
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }return null;
    }

    componentDidMount(){
        console.log(" componentDidMount 호출");
    }

    shouldComponentUpdate(nextProps,nextState){ //반환은 boolean
        console.log('shouldComponentUpdate 호출');
        return nextState.number % 10 !== 4;
        //일의 자리가 4인 숫자는 리렌더링금지
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate 호출');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate 호출',prevProps,prevState);
        if(snapshot){
            console.log("업데이트 전의 색상값: ",snapshot);
        }
    }

    componentWillUnmount(){
        //animation 가능
        console.log('componentWillUnmount 호출');
    }

    onClick = (e) => {
      this.setState({number:this.state.number});
    }

    render() {
      
        console.log("render 호출");
        const myStyle ={
            color:this.props.color,
        };
        
        return (
          <>
          {/* {this.props.missing.value} */}
            <h1 style={myStyle} 
            ref={(ref)=>{this.myRef = ref;}
              }>{this.state.number}
            </h1>   
            <p>color:{this.state.color}</p>
            <button onClick={this.onClick}>+1</button>
          </>
        );
    }
}

export default LifeCycleCls;