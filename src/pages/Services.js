import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { useGlobalContext } from '../context'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




const Services = () => {


  const { services } = useGlobalContext()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1300 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1300, min: 960 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 960, min: 720 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1
    }
  };


  return (
    <Wrapper className='container'>
      <h1 className='center'>Services</h1>

      <div className="cards grid">

        {services.map((elem) => {

          const { id, name, email, image } = elem;

          return (

            <div className="card" key={id}>
              <div className="cardImage">

                <img src={image} alt="" />

              </div>
              <div className="cardText">
                <h2>{name}</h2>
                <h3>{email}</h3>
              </div>
              <Button>Read More</Button>
            </div>

          )

        })}

      </div>

      <Carousel
        infiniteLoop={true}
        swipeable={true}
        autoPlay={true}>
        {services.map((elem) => {

          const { id, name, email, image } = elem;

          return (


            <div className="" key={id}>

              <img src={image} alt="" />
              <h2>{name}</h2>
              <h3 className='email'>{email}</h3>
              <Button>Read More</Button>

            </div>


          )

        })}
      </Carousel>


      <Carousel2
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}

      >

        {services.map((elem) => {

          const { id, name, email, image } = elem;

          return (


            <div className="carousel-card" key={id}>

              <img src={image} alt="" />
              <h2>{name}</h2>
              <h3 className='email'>{email}</h3>
              <Button>Read More</Button>

            </div>

          )

        })}

      </Carousel2>;

    </Wrapper>
  )
}

const Wrapper = styled.section`

.react-multi-carousel-list{
  margin-top: 5rem;

  .carousel-card{
    padding: 1.5rem;
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    width: 80%;
    object-fit: cover;
    margin: 2rem 0;
    border-radius: 50%;
  }

  .email{
    margin: 1rem 0;
  }
}

.carousel-root {
    max-width: 40rem;
    margin: auto;
    margin-top: 5rem;
}

.carousel .control-dots {
  display: none;
}

.carousel .slide img {
    width: 50%;
    padding: 1rem 0;
}

.slide .email {
  margin: 0.8rem 0;
}




padding: 5rem 5%;
margin-top: 10rem;


.cards {

  grid-template-columns: repeat(3,1fr);

  .card{
   padding: 1.5rem;
   box-shadow: ${({ theme }) => theme.colors.boxShadow};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;


    .cardImage {

      overflow: hidden;
      position: relative;
      width: auto;

      &:hover img{
        transform: scale(1.5)
        }

       img{
       transition: all 0.5s;
       width: 100%;
       height: 100%;
       padding: 3rem;
       object-fit: cover;
         }

      &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 999;
        transition: all 0.3s linear;
      }

        &:hover::before{
        width: 100%;
        }

    }

    .cardText{

      h3{
        margin: 1rem 0;
      }
    }

  }
}

@media(max-width: ${({ theme }) => theme.media.tab}) {

.cards {

  grid-template-columns: repeat(2,1fr);

}

.react-multi-carousel-list{
 img {
  width: 90%;
 }
}

}

@media(max-width: ${({ theme }) => theme.media.mobile}) {

.cards {

  grid-template-columns: repeat(1,1fr);

}

.react-multi-carousel-list{
 img {
  width: 100%;
 }
}

}


`

export default Services