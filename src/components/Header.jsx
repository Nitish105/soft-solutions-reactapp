import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>Soft Solutions</h1>
        <main>
            <HashLink to={"/#"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
            <Link to={"/contact"}>Contact</Link>

        </main>
    </nav>
  )
}

export default Header