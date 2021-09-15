import React from 'react'
import styled from 'styled-components'
import SliderScreen from "./Slider"
import Product from './Product'

function HomeScreen() {
    return (
       <Container>
           <SliderScreen/>
           <Product/>
       </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    width: 100%;
    min-height:  100vh;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    

    &:before{
        content: "";
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        background: url("/assets/images/home-background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: -1;
    }
`