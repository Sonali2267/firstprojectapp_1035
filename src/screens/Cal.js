import React, { useState } from 'react'

function Cal() {

    const [number1,setNumber1]=useState(0);
    const [number2,setNumber2]=useState(0);
    const [result,setResult]=useState(0);

    const changeHandler=(event)=>{
        if(event.target.name=="num1"){
            setNumber1(event.target.value);
        }
        else{
            setNumber2(event.target.value);
        }
        console.log(number1);
    }
  return (
    <div>
        <b>Enter First Number:</b>
        <input type='number'name='num1'onChange={changeHandler}/>
        <br/>
        <b>Enter Second Number:</b>
        <input type='number'name='num2'onChange={changeHandler}/>
        <br/>
        <b>Result:</b><br/>
        <button className='btn btn-info'>Sum</button>
        <button className='btn btn-success'>Mul</button>
        <button className='btn btn-primary'>Div</button>
        <button className='btn btn-danger'>Clear</button>
    </div>
  )
}

export default Cal