import React from "react";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get started</NavLink>
            </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 style={{ color: "white" }}>Nishan Boot Mart</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              ut.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3 style={{ color: "white" }}>
              Subscribe to get important updates
            </h3>
            <form action="#">
              <input type="email" placeholder="your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3 style={{ color: "white" }}>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a href="https://www.google.com/search?q=youtube&oq=you&aqs=chrome.0.35i39i650j46i131i199i433i465i512j46i433i512j0i131i433i512j69i65j69i60l3.3024j0j7&sourceid=chrome&ie=UTF-8">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
            
          </div>
          <div style={{ color: "white" }} className="footer-contact">
                <h3 >Contact us</h3>
            <a href="tel:7045784570">+91 7045784570</a>
            </div>
        </div>

        <div className="footer-bottom--section">
            <hr style={{color:"white"}} />
            <div className="container grid grid-two-column">
                <p style={{color:"white"}} >@{new Date().getFullYear()} karanMart. All Rights Reserved</p>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>
        </div>
      </footer> 
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default Footer;
