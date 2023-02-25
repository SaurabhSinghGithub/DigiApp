import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Contact = () => {
  return (
    <Wrapper className='container'>
      <h1 className='center'>Contact Us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1951033470405!2d72.87217334993687!3d19.099094956147038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93baf83c913%3A0x17657b896599c856!2sChhatrapati%20Shivaji%20Maharaj%20International%20Airport!5e0!3m2!1sen!2sin!4v1677245381634!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      <form action="https://formspree.io/f/mzbqrqjw" method='post'>

        <div className="form">

          <input type="text" placeholder='USERNAME' name='name' autoComplete="off"
            required />
          <input type="email" placeholder='EMAIL' name='email' autoComplete="off"
            required />
          <textarea name="message" id="" cols="30" rows="10" autoComplete="off"
            required></textarea>
          <Button className='btn' type='submit'>SEND</Button>

        </div>


      </form>



    </Wrapper>
  )
}

const Wrapper = styled.section`

padding: 5rem 5%;
margin-top: 10rem;

form {

  max-width: 80%;
  margin: 5rem auto;

  .form{
    display: flex;
    flex-direction: column;

    input{
      margin-bottom: 2rem;
      padding: 1rem;
      border: 1px solid blue;
      border-radius: .5rem;
    }

    textarea{
      border: 1px solid blue;
      border-radius: .5rem;
    }

    .btn{
      max-width: 20%;
    }

  }
}



`

export default Contact;