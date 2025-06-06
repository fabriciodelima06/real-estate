"use client";
import React, { Fragment, useEffect, useState } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import BodyContent from "@/components/pages/agency/agencyGrid";
import { getData } from "@/utils/getData";

const AgencyProfile = () => {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`/api/client-agent`)
      .then((res) => {
        setClientData(res.data.agencyList);
      })
      .catch((error) => console.error("Error", error));
  }, []);
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent clientData={clientData} />
      <FooterThree />
    </Fragment>
  );
};

export default AgencyProfile;
