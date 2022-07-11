import React, { Component } from 'react';

class ErrorLifeCycleCls extends Component {
    state = {
        error:false,
    };
    componentDidCatch(error,info){
        this.setState({
            error:true,
        });
        console.log({error,info});
    }
    render() {
      if(this.state.error){
        return (
          <>
            <div>에러 발생!</div>
          </>
      );
      }
      return this.props.children;//children은 props의 errorLifeCycle의 클래스이다/
    }
}

export default ErrorLifeCycleCls;