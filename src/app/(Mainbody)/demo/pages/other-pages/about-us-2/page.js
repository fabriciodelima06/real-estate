"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb2 from "@/layout/Breadcrumb/Breadcrumb2";
import BodyContent from "@/components/pages/other-pages/aboutUs2";

const AboutUs2 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb2 />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default AboutUs2;
