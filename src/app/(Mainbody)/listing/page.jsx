/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns a React component.
 */
"use client";
import GridView from "@/components/listing/gridView/grid/GridView";
import RelatedProperty from "@/components/property/stickyTabOrClassic/RelatedProperty";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarEight from "@/layout/headers/NavbarEight";

const LeftSidebar = () => {
  return (
    <>
      <NavbarEight />
      {/* <Breadcrumb /> */}
      <GridView side={"left"} size={3} gridType={"grid-view"} infiniteScroll gridBar={false} tabHeader={true} />
      <RelatedProperty />
      <FooterThree />
    </>
  );
};

export default LeftSidebar;
