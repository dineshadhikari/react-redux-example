import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
const amount = useSelector(state => state.amount)
  //  const state1 = useSelector(state => state)
    
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="fd">SBI</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#dd">Home <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>

    <button type="button" name="" id="" className="btn btn-primary">Your Balance: {amount}</button>
   
  </div>
</nav>
      </div>
    )
}

export default Navbar