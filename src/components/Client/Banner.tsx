  import React from "react";
  import styled from "styled-components";
    
  const HomeHeader = styled.div`
    text-align: center;
    align-items: center;
    position: relative;
    max-width: 144rem;
    min-height: 6rem;
    background-color: #ffffff;
  
  `;
  const Banner = styled.div`
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
     position: relative;
    }
  `;
  const BannerHeader: React.FC = () => {
    return (
      <HomeHeader>
        <hr></hr>
        <Banner>
          <img src="/Banner.jpg" />
        </Banner>
        <hr></hr>
      </HomeHeader>
    );
  };
  
  export default BannerHeader;
  