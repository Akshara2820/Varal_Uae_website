import React from "react";
import styled from "styled-components";
import Dedicated from "./dedicated";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./heroSection";
import Pricing from "./pricing";

function Layout() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <Dedicated />
      <Pricing />
      <Footer/>
    </Container>
  );
}

export default Layout;
export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 40px 30px;
`;
