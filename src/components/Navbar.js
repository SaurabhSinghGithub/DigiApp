import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {

    const [showMenuBar, setshowMenuBar] = useState(false)
   

    const showMenu = () => {
        setshowMenuBar(!showMenuBar);
    }



    return (
        <Wrapper>

            <div className={showMenuBar ? "active" : "navb"}>

                <ul className='flex navBar'>

                    <li>
                        <Link to="/" className='navLink' onClick={() => showMenu(false)}>Home
                        </Link>
                    </li>

                    <li><Link to="/about" className='navLink' onClick={() => showMenu(false)}>About</Link></li>
                    <li><Link to="/services" className='navLink' onClick={() => showMenu(false)}>Services</Link></li>
                    <li><Link to="/contact" className='navLink' onClick={() => showMenu(false)}>Contact</Link></li>
                </ul>

                <div className="menu-icons">
                    <FiAlignJustify className='bar' onClick={showMenu} />
                    <AiFillCloseCircle className='close' onClick={showMenu} />
                </div>

            </div>


        </Wrapper>
    )
}

const Wrapper = styled.nav`

.navBar{

    li{
        transition: all 0.1s;

        &:hover{
            transform: scale(1.1);
        }
    }

    .navLink{
    font-size: 1.8rem;
    text-transform: uppercase;
    color: #505454;
    transition: all 0.1s;


    &:hover, &:active{
        color: black;
    }

    }

}

.menu-icons{
    display: none;
    position: relative;

    .bar{
        position: absolute;
        right: 0;
        top: -20px;
        font-size: 4rem;
        transition: all 0.2s;
        cursor: pointer;

        &:hover{
            transform: scale(0.9);
        }
    }

    .close{
        display: none;
    }
}


@media(max-width: ${({ theme }) => theme.media.mobile}){
    .navBar{
        position: absolute;
      left: -100%;
      top: 0;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
      z-index: 999;
      background: white;
    }

    .active {

        .navBar{
      left: 0;
      }
        .menu-icons{
            .bar {
                display: none;
            }
             .close{
                display: block;
                position: absolute;
                z-index: 999;
        right: 0;
        top: -20px;
        font-size: 4rem;
        transition: all 0.2s;
        cursor: pointer;

        &:hover{
            transform: scale(0.9);
        }
             }
    }
    }


    .menu-icons{
    display: block;
    }


    }


`




export default Navbar;