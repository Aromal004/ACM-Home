import styled from "styled-components";

function Card({ imageSrc, title, description }) {
    return (
        <Card_>
            <div className="img">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Card_>
        
    );
}

export default Card


const Card_ = styled.div`
    padding: 0;
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 2px 3px 10px grey;

    .img {
        width: 100%;
        height: 60%; 
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 100%; 
        height: 100%;
        object-fit: cover; 
    }

    .text {
        padding: 10px;
        text-align: center;
    }
    &:hover{
        transform: translate(5px,-15px);
        transition: transform 0.3s ease-in-out;
    }
`;
