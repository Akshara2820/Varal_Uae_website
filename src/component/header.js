import React, { useState } from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {ImSearch} from 'react-icons/im'
import '../App.css'

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const menuItems = [
    {
      title: "Home",
    },
    {
      title: "Service",
    },
    {
      title: "Pricing",
    },
    {
      title: "About Us",
    },
  ];
  return (
    <>
      <Header1>
        <div className="header-section">
          <img src="../Assets/logo.png" alt="logo" />
          <div className="nav-bar">
            <div>Home</div>
            <div>Service</div>
            <div>Pricing</div>
            <div>About Us</div>
            <div>
              <button className="button">Start a Company</button>
            </div>
          </div>
          <div className="menu-bar">
            <div
              className="menu-bar"
              onClick={() => setIsMenu(true)}>
              <div>
                <HiMenu className="text-blue-600 text-[32px] -mt-8" />
              </div>
            </div>
          </div>
        </div>
      </Header1>
      
      <div className={`${isMenu ? "menu-view" : "view_menu"} menu-bar bar`}>
        <div className="menu-class">
        <div>
          <img src="../Assets/logo.png" alt="logo" />
        </div>
        <div className="">
          <div onClick={() => setIsMenu(false)}>
            <AiOutlineCloseCircle className="closeBtn" />
          </div>
        </div>
        </div>
        <div className="bar-menu">
          {menuItems.map((item, index) => (
            <div className="" key={index}>
              <div className="slider">
                <div className="slider-text"> {item.title}</div>
              </div>
            </div>
          ))}
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
    </>
  );
}

export default Header;
const Header1 = styled.div`
  font-family: "Lexend Deca", sans-serif;
  .header-section {
    display: flex;
    justify-content: space-between;
    @media (max-width: 426px) {
    }
  }
  .nav-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    @media (max-width: 426px) {
      display: none;
    }
  }
  .menu-bar {
    display: none;
    @media (max-width: 426px) {
      display: block;
      font-size: 30px;
    }
  }
  .button {
    background-color: var(--blueColor);
    padding: 15px 20px;
    color: var(--whiteColor);
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
`;
