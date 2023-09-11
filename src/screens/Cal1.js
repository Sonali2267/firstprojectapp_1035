import React from 'react'

function Cal1() {

    const [data,setData]=useState({
        num1:0,
        num2:0,
        res:0,
    })
  return (
    <div>
        <b>Enter First Number:</b>
        <input type='number' name='num1'/><br/>
        <input type='number' name='num2'/><br/>
        <b>Result:</b><br/>
        <button className='btn btn-info'>Sum</button>
        <button className='btn btn-primary'>Mul</button>
        <button className='btn btn-success'>Div</button>
        <button className='btn btn-danger'>Clear</button>
    </div>
  )
}

export default Cal1