import styled from "styled-components";
import React from "react";

function Footer() {
  return (
    <Footer1>
      <div>
        <img src="../Assets/Ellipse 16.png" alt="logo" />
      </div>
      <div className="img-w">
        <img src="../Assets/Ellipse 27.png" alt="logo" />
      </div>
      <div className="footer-info">
        <div>
          <div className="text-1">
            <div>Read about our blogs for more</div>
            <div>information on our processes</div>
          </div>
          <div className="footer-info1">
            <div className="square">
            
              <img src="../Assets/Vector-4.png" alt="logo" />
            </div>
            <div className="text-2">
              <div>Read about our blogs for more</div>
              <div>information on our processes</div>
              <div className="text-blue">5 Minutes</div>
            </div>
          </div>

          <div className="footer-info1">
            <div className="square">
            
              <img src="../Assets/Vector-4.png" alt="logo" />
            </div>
            <div className="text-2">
              <div>How to start an Offshore</div>
              <div>company formation in Dubai</div>
              <div className="text-blue">5 Minutes</div>
            </div>
          </div>

          <div className="footer-info2">
            <div className="square">
            
              <img src="../Assets/Vector-4.png" alt="logo" />
            </div>
            <div className="text-2">
              <div>SEO Dubai: Who benefits</div>
              <div>the most?</div>
              <div className="text-blue1">5 Minutes</div>
            </div>
          </div>

          <div className="footer-text2 ">
            <div>Satidfied We are When Our</div>
            <div>Customers Are Happy</div>
          </div>
          <div className="footer-info1">
            <div className="circle">
            
              <img src="../Assets/Vector-3.png" alt="logo" />
            </div>
            <div>
              “I am very happy with them. I’ll continue to use their services in
              future & highly recommend them to anyone,“
            </div>
          </div>
          <div className="person">
            <div className="line"></div>
            <div className="person-text">Muhib Abrar</div>
          </div>

          <div className="footer-info1">
            <div className="circle">
            
              <img src="../Assets/Vector-3.png" alt="logo" />
            </div>
            <div>
              “I am very happy with them. I’ll continue to use their services in
              future & highly recommend them to anyone,“
            </div>
            <div>
              <img src="../Assets/Ellipse 8.png" alt="" />
            </div>
          </div>
          <div className="person">
            <div className="line"></div>
            <div className="person-text">Muhib Abrar</div>
          </div>

          <div className="footer-info1">
            <div className="circle">
            
              <img src="../Assets/Vector-3.png" alt="logo" />
            </div>
            <div>
              “I am very happy with them. I’ll continue to use their services in
              future & highly recommend them to anyone,“
            </div>
          </div>
          <div className="person">
            <div className="line"></div>
            <div className="person-text">Muhib Abrar</div>
          </div>
        </div>

        <div>
          <div className="text-1">
            <div>Get to know the whole us and</div>
            <div>more of our services</div>
          </div>
          <div className="tag-heading">Services</div>
          <div className="tags">
            <div>Products</div>
            <div>Solutions</div>
            <div>Assurance</div>
            <div>FAQ</div>
            <div>Working at Varal-Singhania</div>
          </div>

          <div className="tag-heading">Policies</div>
          <div className="tags">
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>

          <div className="tag-heading">About</div>
          <div className="tags">
            <div>About Us</div>
            <div>Contact Us</div>
          </div>

          <div className="tag-heading">Services</div>
          <div className="tags">
            <div>608 One Lake Plaza, Cluster T</div>
            <div>Al Sarayat Street, Jumeirah </div>
            <div>Lake Towers</div>
            <div>Dubai</div>
            <div>United Arab Emirates</div>
            <div>
              <div>Office Hours: Sunday to</div>
              <div>Thursday 8:30 AM to 6:30 PM [GMT+4] </div>
              <div>M: +971 55 794 2016</div>
              <div>O: +971 4 447 2061</div>
            </div>
          </div>

          <div className="tag-heading">Subscribe Now</div>
          <div className="tags">
            <div>Sunbscribe now to receive our</div>
            <div>Newsletters about amazing </div>
            <div>opportunities in Dubai</div>
          </div>
          <div className="input-box">
            <div className="">
              <input
                className="input"
                type="text"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <img
                className="input-img"
                src="../Assets/Group 34.png"
                alt="input"
              />
            </div>
          </div>
          <div className="socil-icon">
            <img src="../Assets/Vector-5.png" alt="facebook" />
            <img src="../Assets/Vector-6.png" alt="facebook" />
            <img src="../Assets/Vector-7.png" alt="facebook" />
            <img src="../Assets/Vector-8.png" alt="facebook" />
          </div>
        </div>
      </div>
      <div>
        <div className="footer-circle">
          <img src="../Assets/Ellipse 7.png" alt="loading" />
        </div>
      </div>
      <div className="end-footer">Varaluae 2021 C All Right Reserved</div>
    </Footer1>
  );
}
export default Footer;

const Footer1 = styled.div`
.footer-circle{
 display: flex;
 justify-content: center;
 margin-left: 20rem;
 @media screen and (max-width: 770px) {
    display: none;
 }
}
  .end-footer {
    margin-top: 30px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    color: var(--grayColor);
  }
  .socil-icon {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
  }
  .input-box {
    margin-top: 2rem;
    display: flex;
    padding: 0px;
  }
  .input-img {
    width: 100%;
    @media screen and (max-width: 330px) {
      width: 37px;
      padding-top: 4px;
    }
  }
  .input {
    padding: 23px 30px;
    border: none;
    outline: none;
    font-size: 16px;
    background-color: #eae7e6;
    @media screen and (max-width: 378px) {
      padding: 19px 10px;
    }
    @media screen and (max-width: 330px) {
      padding: 13px 10px;
    }
  }
  .tag-heading {
    margin-top: 2rem;
    font-weight: 500;
    font-size: 19px;
  }
  .tags {
    font-weight: 500;
    color: var(--grayColor);
    font-size: 18px;
  }
  .person-text {
    font-weight: 500;
    font-size: 18px;
  }
  .line {
    margin-top: 5px;
    border: 3px solid var(--blueColor);
    height: 40px;
    rotate: 90deg;
    margin-left: 25px;
    width: 0;
  }
  .person {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .circle {
    margin-top: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--blueColor);
    height: 45px;
    border-radius: 50%;
    width: 45px;
    padding: 5px;
  }
  .circle-img {
    @media (max-width: 426px) {
      display: none;
    }
  }

  .square {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--blueColor);
    background-color: #ffffff;
    height: 55px;
    border-radius: 10%;
    width: 55px;
    padding: 5px;
  }
  .square-img {
    @media (max-width: 426px) {
      display: none;
    }
  }

  .text-1 {
    border-left: solid var(--blueColor) 5px;
    padding: 10px;
    font-weight: 500;
    font-size: 18px;
  }
  .footer-text2 {
    margin-top: 3.5rem;
    border-left: solid var(--blueColor) 5px;
    padding: 10px;
    font-weight: 500;
    font-size: 18px;
  }
  .text-2 {
    padding: 10px;
    font-weight: 500;
    font-size: 18px;
  }
  .text-blue {
    color: var(--blueColor);
  }

  .footer-info {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30rem;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 3rem;
    }
  }
  .footer-info1 {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .footer-info2 {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    background-color: var(--blueColor);
    color: var(--whiteColor);
  }
  .text-blue1 {
    color: var(--whiteColor);
  }
  .img-w {
    margin-top: 4rem;
    margin-left: 10rem;
    @media screen and (max-width: 426px) {
      display: none;
    }
  }
`;
