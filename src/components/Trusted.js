import React from 'react'
import { styled } from 'styled-components'

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
        <div className="container">
            <h3>Trusted by 1000+ companies</h3>
            <div className="grid grid-five-column">
                <div className="brand-section-slider">
<div className="slide">
    <img style={{marginLeft:"35px"}}  src="./images/google3.jpg" alt="google" />
</div>
<div style={{marginLeft:"55px"}}  className="slide">
    <img src="./images/amazon.jpg" alt="google" />
</div>
<div style={{marginLeft:"55px"}}  className="slide">
    <img src="./images/youtube.png" alt="google" />
</div>
<div style={{marginLeft:"55px"}}  className="slide">
    <img src="./images/facebook.jpg" alt="google" />
</div>
<div style={{marginLeft:"55px"}} className="slide">
    <img src="./images/insta.svg" alt="google" />
</div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.brand-section {
  padding: 12rem 0 0 0;
}
h3 {
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
}

img {
  min-width: 10rem;
  height: 10rem;
}

.brand-section-slider {
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .brand-section-slider {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* background-color: red; */
    text-align: center;
  }
}
`

export default Trusted