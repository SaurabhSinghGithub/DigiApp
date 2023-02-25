import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {

  const [navScroll, setnavScroll] = useState(true)

  const hideNav = () => {

    const navHeight = document.body.scrollTop || document.documentElement.scrollTop;

    if (navHeight > 100) {
      setnavScroll(false)
    }

    else {
      setnavScroll(true)
    }

  }

  useEffect(() => {

    window.addEventListener("scroll", hideNav)
    return () => {
      window.removeEventListener("scroll", hideNav)
    }
  }, [])


  return (
    <>
      {navScroll && (

        <MainHeader>

          <div className="grid grid-2">

            <Link to="/" className="logo">
              <img src={require("../images/logo.png")} alt="logo" />
            </Link>

            {/* {navScroll && (
          <Navbar />
        )} */}
            {navScroll && (
              <Navbar />
            )}

          </div>
        </MainHeader>

      )}

    </>

  )
}

const MainHeader = styled.header`

padding: 1rem 5%;
background: ${({ theme }) => theme.colors.header};
box-shadow: ${({ theme }) => theme.colors.boxShadow};
z-index: 999;
position: fixed;
top: 0;
right: 0;
left: 0;


.logo {
  max-width: 12rem;
  height: auto;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 50%;
    border: 1px solid #ab8a8a;
    transition: all 0.2s;

    &:hover {
      border: 1px solid white;
      transform: scale(0.9)
    }
  }
}

`

export default Header;