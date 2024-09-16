import styled from "styled-components"
import Nav from "./Nav"

function Hero(){
    return(
        <Content id="home">
            <Nav/>

            <Hero_>
                <div>
                    <h1>Welcome to ACM</h1>
                    <p>Empowering the Future of Computing</p> 
                    
                </div>         
                <button>Join Now</button>  
            </Hero_>
        </Content>
    )
}

export default Hero

const Content=styled.div`
    max-height:100vh;
`
const Hero_=styled.div`
    background:url(images/Hero.jpeg) no-repeat ;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    h1{
        font-size: 70px;
        font-family: 'Poppins';
        font-weight: 800;
        color: #ffffff;
        -webkit-text-stroke: 1px black;
    }
    p{
        padding-left:90px ;
        font-size: 20px;
        font-weight: 400;
        -webkit-text-stroke: 1px black;
    }
    button{
        height: 32px;
        margin: 15px;
        width: 100px;
        backdrop-filter: blur(10px) center ;
        border-radius: 2px;
        border: none;
        font-weight: 550;
        background: transparent;
        border: 1px solid black;
        color: #3186b2;
        &:hover{
            background-color: #fcfcfc;
            color:#3186b2;
            border: 1px solid black;
            transition: ease-in 0.3s;
            cursor: pointer;
        }
    }
    @media(max-width:600px){
        h1{
            font-size: 40px;
        }
        p{
            font-size: 15px;
        }
    }
`