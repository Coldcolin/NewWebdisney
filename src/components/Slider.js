import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/slider-badag.jpg"
import img2 from './images/slider-badging.jpg'
import img3 from './images/slider-scale.jpg'
import img4 from './images/slider-scales.jpg'


const SliderScreen = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <Container>
          <Wrapper>
            <MySlider {...settings}>
              <MyStyled>
                <SliderImg src={img1}/>
              </MyStyled>
              <MyStyled>
                <SliderImg src={img2}/>
              </MyStyled>
              <MyStyled>
                <SliderImg src={img3}/>
              </MyStyled>
              <MyStyled>
                <SliderImg src={img4}/>
              </MyStyled>
            </MySlider>
          </Wrapper>
        </Container>
    )
}

export default SliderScreen

const MySlider = styled(Slider)`
   .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`
const SliderImg = styled.img`
  width:100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`
const MyStyled = styled.div`
  width:100%;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  color: black;
  border: 2px solid black;
  transition: 200ms;
  /* margin: 0 20px; */

  :hover {
    border: 2px solid white;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 10px 10px -10px;
  }
`
const Container = styled.div`
  width:100%;
  height: 400px;
  padding-top: 80px;
`
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

