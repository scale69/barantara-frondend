import React from "react";
import Slider from "@/components/Header/slider";
import Contetnt from "@/components/content/Contetnt";
import BodySubContent from "@/components/content/sub-content/BodySubContent";
import Search from "@/components/search/Search";
import HeaderAds from "@/components/ads/HeaderAds";
import Link from "next/link";
import BeanerAds from "@/components/ads/BeanerAds";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 items-center justify-between  px-2 py-24 ">
      <Slider />
      <HeaderAds />
      <Search />
      <Contetnt />
      <BeanerAds />
      <BodySubContent />
    </main>
  );
}
