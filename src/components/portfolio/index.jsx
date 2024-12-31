import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PortfolioArea from "./portfolio-area";
import Footer from "@/src/layout/footers/footer";

const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor"  page_title="Portfolio" />
        <PortfolioArea />
      </main>
      <Footer/>
    </>
  );
};

export default Portfolio;

