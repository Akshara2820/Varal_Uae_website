import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { BiCheckCircle } from "react-icons/bi";
import PricingCard from "./pricingCard";

function Pricing() {
  const [dotNumber, setDotNumber] = useState(2);

  const Item = [
    {
      id: 1,
      refs1: useRef(null),
      heading: "AJMAN OFFSHORE",
      price: "$2,997",
      text: "One Time Payment",
      subHead: "Ajman Offshore New Company formation includes",
      text1: "Attestation Charges",
      text2: "Registered Agent",
      text3: "Registered Office",
      text4: "Varal Administrative",
      text5: "Preparing Statutory File",
      text6: "Liasing with Registration Authorities",
      text7: "Due Diligence Appraisal",
      text8: "Keeping The Register",
      text9: "Seal Charges",
      text10: "Certificate of Good Standing",
    },
    {
      id: 2,
      refs1: useRef(null),
      heading: "RAK ICC",
      price: "$2,997",
      text: "One Time Payment",
      subHead: "Rak Icc New Company formation includes",
      text1: "Attestation Charges",
      text2: "Registered Agent",
      text3: "Registered Office",
      text4: "Varal Administrative",
      text5: "Preparing Statutory File",
      text6: "Liasing with Registration Authorities",
      text7: "Due Diligence Appraisal",
      text8: "Keeping The Register",
      text9: "Seal Charges",
      text10: "Certificate of Good Standing",
    },
    {
      id: 3,
      refs1: useRef(null),
      heading: "SHARJAH MEDIA CITY",
      price: "$2,997",
      text: "One Time Payment",
      subHead: "Sharjah Media City New Company formation include ",
      text1: "Attestation Charges",
      text2: "Registered Agent",
      text3: "Registered Office",
      text4: "Varal Administrative",
      text5: "Preparing Statutory File",
      text6: "Liasing with Registration Authorities",
      text7: "Due Diligence Appraisal",
      text8: "Keeping The Register",
      text9: "Seal Charges",
      text10: "Certificate of Good Standing",
    },
  ];
  const [storeData, setStoreData] = useState(Item);

  useEffect(() => {
    storeData.map((i) => {
      if (dotNumber === i.id) {
        i.refs1.current.scrollIntoView({ behavior: "smooth" });
      } else if (dotNumber === i.id) {
        i.refs1.current.scrollIntoView({ behavior: "smooth" });
      } else if (dotNumber === i.id) {
        i.refs1.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, [dotNumber]);

  return (
    <Pricing1>
      <div className="heading">
        <span className="text-underline ">Most popular affordable pricing</span>
        per <br /> jurisdictions are brought to you to <br />
        kick off your adventure.
      </div>

      <div className="pricing-card">
        <div className="flex">
          {Item.map((i) => {
            return (
              <PricingCard
                key={i.id}
                value={dotNumber}
                refs={i.refs1}
                title={i}
              />
            );
          })}
        </div>
        <div className="flex-row">
          {Item.map((i) => {
            return (
              <button
                className={i.id === dotNumber ? "dot active" : "dot"}
                onClick={() => {
                  setDotNumber(i.id);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </Pricing1>
  );
}
export default Pricing;

const Pricing1 = styled.div`
  .dot-button {
    display: none;
    @media screen and (max-width: 426px) {
      display: block;
    }
  }
  .dot {
    height: 15px;
    aspect-ratio: 1;
    background: rgba(0, 0, 255, 0.05);
    margin: 10px;
    border-radius: 100%;
    border: 1px solid rgb(0, 0, 255);
  }

  .active {
    background: rgb(0, 0, 255);
    height: 25px;
  }

  .flex-row {
    display: none;

    @media screen and (max-width: 426px) {
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      position: sticky;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  }
  .no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding: 0;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hs > li,
  .item {
    scroll-snap-align: center;
  }
  @media (max-width: 770px) {
    .hs {
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      overflow-x: scroll;
      scroll-snap-type: x proximity;
    }
  }

  .iconText {
    font-size: 20px;
    @media screen and (max-width: 426px) {
      font-size: 17px;
    }
  }
  .sub {
    font-size: 24px;
    @media screen and (max-width: 426px) {
      font-size: 20px;
    }
  }
  .price-heading {
    font-size: 24px;
    font-weight: 500;
  }
  .icon {
    margin-top: 4px;
    font-size: 24px;
  }
  .priceText {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 426px) {
     display: grid;
    }
  }
  .text {
    font-size: 20px;
    color: var(--grayColor);
  }
  .text-2 {
    font-size: 20px;
  }

  .price-2 {
    font-weight: 800;
    font-size: 40px;
  }
  .heading {
    margin-top: 5rem;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    margin: auto;
    color: var(--blackColor);
    @media (max-width: 426px) {
      font-size: 38px;
      font-weight: 600;
      line-height: 1.4;
    }
  }
  .text-underline {
    text-decoration: underline var(--orangeColor) 10px;
  }
  .pricing-card {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    margin-top: 4rem;

    @media screen and (max-width: 770px) {
      display: flex;
      flex-direction: column;
      gap: 10px;

      overflow-x: scroll;
      overflow: hidden;
      scroll-snap-type: x proximity;
    }
  }
  .card {
    border: 1px transparent;
    padding: 20px;
    border-radius: 8px;
  }
  .flex {
    display: flex;
  }
`;
