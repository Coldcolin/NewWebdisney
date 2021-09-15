import React from 'react'
import styled from 'styled-components'
import img from './images/home-icon.svg'
import logo from './images/logo.svg'
import img1 from './images/movie-icon.svg'
import img2 from './images/series-icon.svg'
import img3 from './images/search-icon.svg'
import img4 from './images/watchlist-icon.svg'
import img5 from './images/original-icon.svg'
import img10 from './images/okkk.png'

function HeaderNav() {
    return (
       <Container>
       <Logo src={logo}/>
           <Wrapper>
               <a>
                   <img src={img}/>
                   <span>Home</span>
               </a>
               <a>
                   <img src={img1}/>
                   <span>Movies</span>
               </a>
               <a>
                   <img src={img2}/>
                   <span>Series</span>
               </a>
               <a>
                   <img src={img3}/>
                   <span>Search</span>
               </a>
               <a>
                   <img src={img4}/>
                   <span>Watchlist</span>
               </a>
               <a>
                   <img src={img5}/>
                   <span>Favourite</span>
               </a>
           </Wrapper>
            <Avatar>
                <AvatarPix src={img10} />
                <span>Colin</span>
            </Avatar>
       </Container>
    )
}

export default HeaderNav

const Avatar = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;

    span{
        opacity: 0;
        transition: all 350ms;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;

        :hover{
            cursor: pointer;
            opacity: 1;
        }
    }
`
const AvatarPix = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
`
const Logo = styled.img`
    width:120px;
    height: 50%;
    object-fit: contain;
    margin-left: 20px;

`
const Container = styled.div`
    width: 100%;
    height: 90px; 
    display: flex;
    align-items: center;
    background-color: #03040D;

`
const Wrapper = styled.div`
    width:96%;
    padding-left:20px;
    height: 100%;
    display: flex;
    align-items: center;
    

    a{
        display: flex;
        align-items: center;
        margin: 0 20px;

        img{
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }
        span {
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            position: relative;
            Opacity: 0.7;

            :after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: whitesmoke;
            left: 0;
            bottom: -2px;
            transform: scale(0);
            transform-origin: center left;
            transition: all 350ms;
            opacity: 0;
        }
        }
        :hover {
            cursor: pointer;

            span{
                opacity:1;
                :after{
                    opacity: 1;
                    transform: scale(1.05);
                }
            }
        }
    }
`

