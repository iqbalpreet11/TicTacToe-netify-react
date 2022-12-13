import React from 'react'

const Square = (props) => {
  return (
    <div style={style} onClick={props.onClick} className='square'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square

const style = {
    border: "1px solid black", 
    height:'100px',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

}