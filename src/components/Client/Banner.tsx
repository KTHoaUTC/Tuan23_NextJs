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
  @media screen and (min-width: 780px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
     position: relative;
    }
  }
  @media screen and (max-width: 800px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
     position: relative;
    }
  }
  @media screen and (max-width: 390px) {
    width: 50rem;
    padding-left: 1rem;
    padding-right: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
     position: relative;
    }
  }

  `;
  const BannerHeader: React.FC = () => {
    return (
      <HomeHeader>
        <Banner>
          <img src="/Banner.jpg" />
        </Banner>
      </HomeHeader>
    );
  };
  
  export default BannerHeader;
  