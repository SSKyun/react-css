import React from 'react';
import PropsType from 'prop-types';


const myStyle = {
    backgroundColor : 'blue',
    color : 'red',
    fontSize : '34px'
};

const FuncMyCom = (props) => { 
    //{name,age,gender,roomnum }를 props대신 사용해도 됨.
    const funcTest = '일본반'

    const {name,age,gender,roomnum } = props;
    return (
        <>
        <div><span>{name}</span><p>{age}</p><h6>{gender}</h6><b>{roomnum}</b></div>
        <div style={myStyle}>{funcTest + '입니다.'}</div>
        
        </>
    );
};

FuncMyCom.defaultProps = {
    name : '일본IT',
}

FuncMyCom.propTypes = {
    name: PropsType.string.isRequired,
    age: PropsType.number,
};

export default FuncMyCom;