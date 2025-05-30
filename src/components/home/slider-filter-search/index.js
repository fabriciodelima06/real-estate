/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import { Fragment, useEffect, useState } from "react";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import FeatureSection from "./Feature";
import HomeBannerSection from "./HomeBanner";
import OfferSection from "./Offer";
import PropertySection from "./Property";
import SalePropertySection from "./SaleProperty";
import TestimonialSection from "./Testimonial";

const BodyContent = () => {
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
      <HomeBannerSection />
      <SalePropertySection value={value?.LatestForSalePropertyData} />
      <FeatureSection value={value?.FeaturedProperty} />
      <PropertySection value={value?.LatestPropertyData} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
      <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} />
      <BannerSection />
      <AboutSection value={clientData?.MeetOurAgent} />
      <TestimonialSection value={clientData?.HappyClient} normal={true} />
      <BrandSection />
    </Fragment>
  );
};

export default BodyContent;
