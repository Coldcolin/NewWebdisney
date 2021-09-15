import React from 'react'
import styled from 'styled-components'
import img from './images/viewers-marvel.png'
import img1 from './images/viewers-disney.png'
import img2 from './images/viewers-national.png'
import img3 from './images/viewers-pixar.png'
import img4 from './images/viewers-starwars.png'
import vid from './videos/1564676115-marvel.mp4'
import vid1 from './videos/1564674844-disney.mp4'
import vid2 from './videos/1564676296-national-geographic.mp4'
import vid3 from './videos/1564676714-pixar.mp4'
import vid4 from './videos/1608229455-star-wars.mp4'



const Product = () => {
    return (
        <Container>
            <Wrapper>
                <img src={img}/>
                <video src={vid}
                autoPlay
                loop
                muted
                playsInline
                />
            </Wrapper>
            <Wrapper>
                <img src={img1}/>
                <video src={vid1}
                autoPlay
                loop
                muted
                playsInline
                />
            </Wrapper>
            <Wrapper>
                <img src={img2}/>
                <video src={vid2}
                autoPlay
                loop
                muted
                playsInline
                />
            </Wrapper>
            <Wrapper>
                <img src={img3}/>
                <video src={vid3}
                autoPlay
                loop
                muted
                playsInline
                />
            </Wrapper>
            <Wrapper>
                <img src={img4}/>
                <video src={vid4}
                autoPlay
                loop
                muted
                playsInline
                />
            </Wrapper>
        </Container>
    )
}

export default Product

const Container = styled.div`
    margin-top: 30px;
    display:grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 20px;
    padding: 20px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 5px;
    border: 2px solid grey;
    transition: all 350ms;
    transform: scale(1);
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 10px 10px -10px;
    position: relative;
    
    video {
        position: absolute;
        left: 0;
        width: 100%;
        height: 200px;
        object-fit: cover;
        opacity: 0;
        border-radius: 5px;
        transition: all 350ms;
    }

    :hover {
        transform: scale()(1.03);
        border: 2px solid white;
        cursor: pointer;
        box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 10px 10px -10px;

        video {
            opacity: 1;
            
        }
    }

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    
`