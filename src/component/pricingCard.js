import React, { useState, useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";
import styled from "styled-components";

function PricingCard({ refs, title, value }) {
  console.log("iii", refs);
  return (
    <PricingCard1>
      <div
        ref={refs}
        className={title.id === value ? "pricingCard2 activeCard" : "pricingCard2"}
      >
        <div className="">
          <div className="">
            <div className="price-heading">{title.heading}</div>
            <div className="priceText">
              <div className="price">{title.price}</div>
              <div className="text-2">{title.text}</div>
            </div>
            <div className="sub">{title.subHead}</div>
            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text1}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text2}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text3}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text4}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text5}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text6}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text7}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text8}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText">{title.text9}</div>
            </div>

            <div className="priceText">
              <div className="icon">
                <BiCheckCircle />
              </div>
              <div className="iconText"> {title.text10} </div>
            </div>
            <div className="continue-btn2">Continue</div>
          </div>
        </div>
      </div>
    </PricingCard1>
  );
}

export default PricingCard;
const PricingCard1 = styled.div`
  .activeCard {
    background-color: var(--blueColor);
    color: var(--whiteColor) !important;
  }
  .price {
    font-weight: 800;
    font-size: 40px;
    @media screen and (max-width:426px){
      font-size: 30px;
    }
  }
  /* .pricingCard1 {
    color: var(--blueColor);
    padding: 30px;
    @media screen and (max-width:426px) {
      padding: 10px;
      width: 300px;
      overflow-x: scroll;
    }
  } */
  .pricingCard2 {
    color: var(--blueColor);
    border: 1px solid;
    border: none;
    padding: 30px;
    border-radius: 8px;

    @media screen and (max-width:426px) {
      padding: 10px;
      width: 80vw;
      border-radius: 8px;
    }
    @media screen and (max-width:376px) {
      padding: 10px;
      width: 76vw;
      border-radius: 8px;
    }
  }
  .continue-btn{
    margin-top: 20px;
    border: 1px solid var(--blueColor);
    color: var(--blueColor);
    border-radius: 8px;
    padding: 30px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 18px;
    @media screen and (max-width:426px) {
      padding: 10px;
      width: 200px;
      margin: auto;
    }
  }
  .continue-btn2 {
    margin-top: 20px;
    background-color: var(--whiteColor);
    border: 1px solid var(--blueColor);
    color: var(--blueColor);
    border-radius: 8px;
    padding: 30px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 18px;
    @media screen and (max-width:426px) {
      padding: 10px;
      font-weight: 500;
      font-size: 14px;
      width: 200px;
      margin: auto;
      margin-top: 20px;
    }
    @media screen and (max-width:326px) {
      padding: 10px;
      font-weight: 500;
      font-size: 14px;
      width: 150px;
      margin: auto;
      margin-top: 20px;
    }
  }
  .text {
    font-size: 20px;
    color: var(--grayColor);
  }
  .text-2{
    font-size: 20px;
  }
`;
