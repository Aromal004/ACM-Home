import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function Home() {
  return (
        <Container id='about'>
            <div className='blank'></div>
            <About >
                
                <h1>ABOUT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque reprehenderit quaerat! Dolores, iure nesciunt nihil rerum cumque saepe, laborum laudantium omnis consequuntur vel incidunt. Excepturi laudantium dignissimos iusto ea.</p>
            </About>
            <VisionMission>
                <Card
                    imageSrc="./images/vision.jpg"
                    title="Vision"
                    description="Some description about the vision goes here."
                />
                <Card
                    imageSrc="./images/vision.jpg"
                    title="Mission"
                    description="Some description about the mission goes here."
                />
            </VisionMission>
        </Container>
        
  )
}

export default Home
const Container=styled.div`
    .blank{
        height: 80px;
        background-color:white;
    }
    margin-top: 50px;
    background-color: #f0f0f0;
`

const VisionMission=styled.div`
    display: flex;
    gap: 80px;
    justify-content: center;


    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const About=styled.div`
    border-radius: 3px;
    padding: 20px;
    margin-left: 50px;
    background-color: #0fc9e7;
    margin-bottom: 20px;
    box-shadow: -5px 4px 20px black; 
`

