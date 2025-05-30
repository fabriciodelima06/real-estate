/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */

"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import GridView from "@/components/listing/gridView/grid/GridView";

const LeftSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"left"} size={2} gridType={"grid-view"} gridBar={true} />
      <FooterThree />
    </Fragment>
  );
};

export default LeftSidebar;