import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper className='container'>

      <div className="upper-footer grid grid-2">
        <h3>Contact us for more informtion and join the journey</h3>
        <Button className='btn'>Contact Us</Button>
      </div>


      <div className="middle-footer grid grid-4">

        <div className="title">
          <h3>Saurabh Singh</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eveniet.</p>
        </div>

        <div className="subscribers">
          <h3>Subscribe to get important updates</h3>
          <form action="#">
            <input type="email" placeholder='email' autoComplete='off' required />
            <Button type='submit' className='btn'>SUBSCRIBE</Button>
          </form>
        </div>

        <div className="follow">
          <h3>Follow US</h3>
          <div className="icons">
            <FaInstagram />
            <FaFacebookSquare />
            <FaTwitter />
          </div>
        </div>

        <div className="call">
          <h3>Phone number</h3>
          <h4>+9112345678</h4>
        </div>

      </div>

      <hr />

      <div className="lower-footer grid grid-2">
        <h3>@{new Date().getFullYear()} DigiApp. All Rights Reserved</h3>
        <div className="terms">
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

padding: 5rem 5%;

.upper-footer{
  max-width: 70%;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  transform: translateY(50%);
  z-index: 999;


  .btn{
    max-width: 50%;
    margin: 0 auto;
  }

}

.middle-footer {
  background: #1b1b91;
  padding: 6rem;
  color: white;
  margin-top: 2rem;

  h3{
    margin: 1rem 0;
  }

  input{
    margin-bottom: 1rem;
  }

  .title{
    p{
      max-width: 70%;
    }
  }

  .follow{
    text-align: center;
    .icons{
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
  }

  .call{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.lower-footer{
  background: #1b1b91;
  padding: 3rem;
  color: white;
}


@media(max-width: ${({ theme }) => theme.media.mobile}){
  .upper-footer{
    grid-template-columns: 1fr;

    h3{
    margin: 0 auto;
   }
  }

  .middle-footer {
    grid-template-columns: 1fr 1fr;
    .follow{
      text-align: left;
      .icons{
        justify-content: flex-start;
      }
    }

    .subscribers{
      display: flex;
      flex-direction: column;

      input{
        max-width: 50%
      }
      .btn{
        max-width: 30%
      }
    }

    .call{
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}

@media(max-width: ${({ theme }) => theme.media.mobile}){


  .middle-footer {
    grid-template-columns: 1fr;
  }
}

`

export default Footer