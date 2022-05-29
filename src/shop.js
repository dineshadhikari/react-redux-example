import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'
export const Shop = () => {
  let dispatch = useDispatch()
  const action = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        Adidas shoe Rs. 50 
         <div className="mr-auto mt-2">
         {/* <button className='btn btn-primary' onClick={ () => dispatch(actionCreators.withdrawMoney(10))}><i className="bi bi-dash-square"></i></button>
        Add to Cart
        <button className='btn btn-primary' onClick={ () => {dispatch(actionCreators.depositMoney(10))}}><i className="bi bi-plus-square"></i></button> */}
         <button className='btn btn-primary mr-1' onClick={ () => action.withdrawMoney(50) }><i className="bi bi-dash-square"></i> </button>
        Add to Cart 
        <button className='btn btn-primary ml-1' onClick={ () => {dispatch(actionCreators.depositMoney(50))}}> <i className="bi bi-plus-square"></i></button>
        

    </div>
    </div>
  )
}
