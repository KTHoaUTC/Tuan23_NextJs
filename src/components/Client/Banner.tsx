  import React from "react";
  import styled from "styled-components";
  import Image from "next/image";
  import BannerImg from "../../../public/Banner.png" 
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
    .imgBanner {
      width: 100%;
      height: 100%;
      object-fit: cover;
     position: relative;
    }
  }
  @media screen and (max-width: 800px) {
    .imgBanner {
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
    .imgBanner {
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
          {/* <img src="/Banner.jpg" /> */}
          <Image className="imgBanner" src={BannerImg} alt=""/>
        </Banner>
      </HomeHeader>
    );
  };
  
  export default BannerHeader;
  