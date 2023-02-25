import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useGlobalContext } from '../context'


const HeroSection = () => {

    const { fname, image } = useGlobalContext();

    return (
        <Wrapper className='grid grid-2 container fx'>
            <div className="Herotext">

                <h3>Welcome to my Page</h3>
                <h1>{fname}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, enim beatae similique itaque. And my surname is Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae fugit quasi autem unde expedita.</p>
                <Button>Contact me</Button>


            </div>

            <div className="heroImage flex">

                <img src={image} alt="heroImg" className='img' />

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

padding: 5rem 5%;
margin-top: 10rem;

h3 {
    font-size: 4.5rem;
}

h1{
    font-size: 3.5rem;
}

p{
    margin: 2rem 0;
    font-size: 1.5rem;
}

.heroText{


}

.heroImage{
    max-width: 100%;
    justify-content: center;


    img {
        width: 50%;
        height: 100%;
    }
}


`

export default HeroSection;