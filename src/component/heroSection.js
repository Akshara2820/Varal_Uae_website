import React from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";

function HeroSection() {
  return (
    <HeroSection1>
      <div className="hero-section-1">
        <div>
          <img
            className="circle-img"
            src="../Assets/Ellipse 16.png"
            alt="loading..."
          />
        </div>

        <div>
          <img
            className="circle-img"
            src="../Assets/Ellipse 19-1.png"
            alt="loading..."
          />
        </div>

        <div className="input-box">
          <div className="search-icon">
            <ImSearch />
          </div>
          <div>
            <input
              className="searchbar"
              type="text"
              placeholder="Search a Term | Topic"
            />
          </div>
        </div>
      </div>
      <div className="heading-section">
        <div className="sub-heading-1">
          <div className="sub-heading">Claim a Free Quote</div>
          <div>
            <img
              className="sub-heading-circle"
              src="../Assets/Ellipse 11.png"
              alt="loading..."
            />
          </div>
        </div>

        <div className="heading-img">
          <div className="heading-width">
            <div className="heading">
              <span className="text-underline">Great started </span>on
              fulfilling Your Dubai or UAE dream.
            </div>

            <div className="image-contain">
              <img
                className="hero-img1"
                src="../Assets/hero-img.png"
                alt="lodaing.."
              />
            </div>

            <div className="sub-heading">UAE & Offshore Company</div>

            <div className="paragraph">
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas.
            </div>

            <div className="handle-button">
              <button className="button border">Start a Company</button>
              <button className="border-button">Renew a Company</button>
            </div>
          </div>

          <div className="">
            <img
              className="hero-img"
              src="../Assets/hero-img.png"
              alt="lodaing.."
            />
          </div>
        </div>

        <div className="hero-last-section">
          <div className="hero-text-center">
            Watch the video about UAE or Offshore Company Registration
          </div>
          <div className="circle">
            <img
              className="video-img"
              src="../Assets/Group 117.png"
              alt="loading..."
            />
          </div>
        </div>
      </div>
    </HeroSection1>
  );
}

export default HeroSection;
const HeroSection1 = styled.div`
  margin-top: 5rem;
  .heading-width {
    width: 50%;
    @media(max-width:769px){
      width: 100%;
    }
  }
  .button {
    background-color: var(--blueColor);
    padding: 15px 28px;
    color: var(--whiteColor);
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
 
  .hero-img1{
    display: none;
    @media (max-width:769px){
      display: block;
      width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    }
  }
  .hero-section-1 {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:426px){
      justify-content: center;
    }
  }
  .sub-heading-1 {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .heading-img {
    display: flex;
    @media (max-width: 426px) {
      flex-wrap: wrap;
    }
  }
  .hero-section {
    margin-top: 5rem;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
  }
  .hero-circle-img {
    display: flex;
    justify-content: space-between;
  }
  .heading {
    font-size: 55px;
    font-weight: 800;
    color: var(--blackColor);
    @media (max-width: 426px) {
      font-size: 38px;
      font-weight: 700;
      line-height: 1.4;
    }
  }
  .text-underline {
    text-decoration: underline var(--orangeColor) 10px;
  }
  .sub-heading {
    color: var(--blueColor);
    font-size: 30px;
    padding: 10px 0px;
    @media (max-width: 426px) {
      font-weight: 700;
    }
  }
  .paragraph {
    color: var(--grayColor);
    opacity: 0.5;
    font-weight: 700;
    font-size: 30px;
    @media (max-width:426px){
      font-weight:500;
      font-size: 24px;
    }
  }
  .border {
    border-radius: 8px 0px 0px 8px;
    @media screen and (max-width:426px) {
      border-radius: 8px;
    }
  }
  .border-button {
    background-color: var(--whiteColor);
    border-color: var(--blueColor);
    padding: 13px 20px;
    color: var(--blueColor);
    font-size: 16px;
    border-radius: 0px 8px 8px 0px;
    @media screen and (max-width:426px) {
      margin-top: 20px;
      border-radius: 8px;
    }
  }
  .handle-button {
    margin-top: 20px;
  }
  .herosection-left {
    width: 60%;
  }
  .herosection-right {
    width: 40%;
  }
  .input-box {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: flex-end;
    @media screen and (max-width:426px){
     
     
    }
  }
  .searchbar {
    padding: 12px 35px;
    border-color: var(--blueColor);
    outline: none;
    border-radius: 5px;
    font-size: 20px;
    @media screen and (max-width:426px) {
      padding: 10px 30px;
      font-size: 14px;
      
    }
    
  }
  input::-webkit-input-placeholder {
    color: var(--blueColor);

  }
  .search-icon {
    position: absolute;
    z-index: 10;
    padding: 0px 7px;
    font-size: 22px;
    color: var(--blueColor);
  }
  .hero-img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    @media (max-width:769px){
      display: none;
    }
  }
  .hero-last-section {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    color: var(--blueColor);
    font-size: 20px;
    font-weight: 500;
    @media screen and (max-width: 426px) {
      flex-wrap:wrap;
      
    }
  }
  .video-img {
    /* margin-left: -2px; */
    margin-top: -2px;
  }
  .circle {
    margin-top: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--blueColor);
    background-color: #ffffff;
    height: 25px;
    border-radius: 50%;
    width: 25px;
    padding: 5px;
  }
  .circle-img {
    @media (max-width: 426px) {
      display: none;
    }
  }
`;
