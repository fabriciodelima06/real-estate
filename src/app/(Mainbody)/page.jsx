"use client";
import { useEffect } from "react";
import BodyContent from "@/components/home/search-tab";
import { ConfigDB } from "@/config/themeCustomizerConfig";
import FooterFive from "@/layout/footers/FooterFive";
import NavbarEight from "@/layout/headers/NavbarEight";

export default function Page() {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#f35d43");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#f34451");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarEight />
      <BodyContent />
      <FooterFive />
    </>
  );
}