import React from "react";
// import styled from "styled-components";
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import BrandProducts from "./components/BrandProducts";

const Home = () => {
  const mydata={
    name:"Nishan Boot Mart"
  }
  return <div className="test">
    <>
    <HeroSection data={mydata}/>

    <BrandProducts/>
    <Services/>
    <Trusted/>
    </>

  </div>;
};

// const Wrapper = styled.section`
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;

export default Home;