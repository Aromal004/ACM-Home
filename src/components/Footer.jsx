import styled from "styled-components";
import { FaInstagram, FaLinkedin } from "react-icons/fa6"; 

function Footer() {
    return (
        <Foot id="footer">
            <div className="footer-content">
                <div className="left-section">
                    <h3>ACM TKMCE</h3>
                    <p className="FF">Association of Computing Machinery</p>
                    <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vero!</p>
                </div>

                <div className="right-section">
                    <div className="links">
                        <div>
                            <h4>CONTACT</h4>
                            <a href="">acmtkmce.ac.in</a>
                        </div>
                    </div>

                    <div className="icons">
                        <a href="https://www.instagram.com/acm_tkmce/" target="_blank"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/acm-tkmce/?originalSubdomain=in" target='_blank'><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <p className="line"></p>
            < p className="copyryt">&copy; 2024 ACM TKMCE. All Rights Reserved.</p>
        </Foot>
    );
}

export default Footer;

const Foot = styled.div`
    background-color: black;
    color: white;
    padding: 20px 50px;
    height: 200px;
    margin-top: 20px;
    bottom: 0px;
    .footer-content {
        display: flex;
        justify-content: space-between;
    }

    .left-section {
        max-width: 50%;
    }

    h3 {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .FF{
        font-weight: 500;
        font-size: 18px;
    }
    .text {
        margin: 5px 0;
        font-size: 14px;
        font-weight: 400;
    }

    .right-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .links {
        display: flex;
        gap: 30px;
        font-size: 14px;

        h4 {
            font-size: 16px;
            margin-bottom: 5px;
        }

        a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
                color: #999;
            }
        }
    }

    .icons {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    svg {
        font-size: 25px;
        color: white;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #999;
        }
    }
    .line{
        width: 95%;
        height: 1px;
        background-color: white;
        margin-top: 60px;
        transform: translateX(30px);
    }
    .copyryt{
        font-size: 12px;
        display: flex;
        justify-content: center;
    }
    @media (max-width:600px){
        .FF{
            font-size: 14px;
        }
        .text{
            font-size:12px;
        }
    }
`;
