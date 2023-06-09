import React from "react";
import { Navbar } from "./Navbar";
import Banner from "./Banner";
import OurProducts from "./OurProducts";
import Birthday from "./Birthday";
import Travel from "./Travel";
import LandingPage from "./FooterPage/LandingPage";
export const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <OurProducts />
      <Birthday />
      <Travel />
      <LandingPage/>
    </>
  );
};
