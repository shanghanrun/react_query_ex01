import { Link } from "react-router-dom";
import React from 'react'

const Nav = () => {
  return (
	<div className="nav">
	  <Link to="/">HomePage</Link>
	  <Link to="/query">ReactQuery</Link>
	</div>
  )
}

export default Nav
