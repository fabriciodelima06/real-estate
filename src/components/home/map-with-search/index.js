/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { Fragment, useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import BrandSection from "../classic/Brand";
import FeaturedPropertySection from "../classic/FeaturedProperty";
import LatestPropertySection from "../classic/LatestProperty";
import ListingPropertySection from "../classic/ListingProperty";
import PropertyServicesSection from "../classic/PropertyServices";
import SubscribeSection from "../classic/Subscribe";
import TestimonialSection from "../classic/Testimonial";
import VideoSection from "../classic/Video";
import AboutSection from "../classic/About";
import HomeBannerVSearchMapSection from "./HomeBannerVSearchMap";
import HomeBannerHSearchMapSection from "./HomeBannerHSearchMap";
import MapFilter from "./MapFilter";

const BodyContent = ({ map }) => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`/api/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.error("Error", error));
    getData(`/api/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.error("Error", error));
  }, []);
  return (
    <Fragment>
      {map === "VSearch" ? <HomeBannerVSearchMapSection /> : <HomeBannerHSearchMapSection />}
      {map !== "VSearch" && <MapFilter />}
      <LatestPropertySection value={value?.LatestPropertyInClassicLayout} />
      <FeaturedPropertySection value={value?.FeaturedPropertyInClassicLayout} />
      <PropertyServicesSection value={AppPropertyData.PropertyServicesInClassic} />
      <ListingPropertySection value={value?.ListingPropertyInClassicLayout} />
      <VideoSection />
      <AboutSection value={clientData?.OurAgentInClassicLayout} />
      <SubscribeSection />
      <TestimonialSection value={clientData?.OurHappyClientInClassicLayout} />
      <BrandSection />
    </Fragment>
  );
};

export default BodyContent;
