import React from 'react'

function Cal1() {

    const [data,setData]=useState({
        num1:0,
        num2:0,
        res:0,
    });

    const changeHandler=(event)=>{
        setData({...data,[event.target.name]:Number(event.target.value)});
        console.log(data);
    };

    const sumClick=()=>{
        setData({...data,res:data.num1+data.num2});
    };
    const mulClick=()=>{
        setData({...data,res:data.num1*data.num2});
    };
     const divClick=()=>{
        setData({...data,res:data.num1/data.num2});
    };
    const clearClick=()=>{
        setData({num1:0,num2:0,res:0});
    };
  return (
    <div>
        <b>Enter First Number:</b>
        <input value={data.num1} type='number' name='num1' onChange={changeHandler}/><br/>
        <input value={data.num2} type='number' name='num2' onChange={changeHandler}/><br/>
        <b>Result:</b>{data.res}<br/>
        <button onClick={sumClick} className='btn btn-info'>Sum</button>
        <button onClick={mulClick} className='btn btn-primary'>Mul</button>
        <button onClick={divClick} className='btn btn-success'>Div</button>
        <button onClick={clearclick} className='btn btn-danger'>Clear</button>
    </div>
  )
}

export default Cal1