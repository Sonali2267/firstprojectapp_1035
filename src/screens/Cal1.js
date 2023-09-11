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
  return (
    <div>
        <b>Enter First Number:</b>
        <input type='number' name='num1' onChange={changeHandler}/><br/>
        <input type='number' name='num2' onChange={changeHandler}/><br/>
        <b>Result:</b><br/>
        <button className='btn btn-info'>Sum</button>
        <button className='btn btn-primary'>Mul</button>
        <button className='btn btn-success'>Div</button>
        <button className='btn btn-danger'>Clear</button>
    </div>
  )
}

export default Cal1