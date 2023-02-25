import React from 'react'
import { FiArrowUp } from "react-icons/fi";
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

const ScrollTop = () => {

    const [visible, setvisible] = useState(false)

    useEffect(() => {



        window.addEventListener("scroll", scrollVisible)

        return () => {
            window.removeEventListener("scroll", scrollVisible)
        }

    }, [])


    const scrollVisible = () => {

        const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollHeight > 100) {

            setvisible(true);

        }

        else {
            setvisible(false);
        }

    }


    const scrollToTop = () => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;


    }

    return (
        <Wrapper className="arrow">
            {visible && (

                <FiArrowUp className='arrowIcon' onClick={scrollToTop} />

            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`

.arrowIcon {
    position: fixed;
    z-index: 999;
    bottom: 7.5rem;
    right: 10rem;
    font-size: 5rem;
    background: #d9d0d0;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background: red;
    }
}

`


export default ScrollTop;