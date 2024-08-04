import React from "react";
import Slider from "@/components/Header/slider";
import Contetnt from "@/components/content/Contetnt";
import BodySubContent from "@/components/content/sub-content/BodySubContent";
import Search from "@/components/search/Search";
import HeaderAds from "@/components/ads/HeaderAds";
import Link from "next/link";
import BeanerAds from "@/components/ads/BeanerAds";
import { FetchAds, fetchALLAds } from "@/lib/axios/action";

export interface IGambar {
  url: string;
  altText: string;
}

export interface IBerita {
  title: string;
  content: string;
}

export interface IAds {
  id: number;
  documentId: string;
  judul: string;
  mobile: boolean;
  posisi: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  gambar: IGambar;
  beritas: IBerita[];
}

export default async function Home() {
  const dataAds = (await fetchALLAds()) as IAds[];
  const adsLeft = dataAds?.filter((item: any) => item.posisi === "left");
  const adsRight = dataAds?.filter((item: any) => item.posisi === "right");
  const adsPopUP = dataAds?.filter((item: any) => item.posisi === "pop_up");

  return (
    <main className="flex min-h-screen flex-col gap-5 items-center justify-between  px-2 py-24 ">
      <Slider />

      {/* <HeaderAds /> */}

      {/* x */}
      <Search />
      {/* x */}

      {/* ada */}
      <Contetnt {...{ adsLeft, adsRight, adsPopUP }} />
      {/* ada */}

      {/* ada */}
      <BeanerAds />

      <BodySubContent />
      {/* ada */}
    </main>
  );
}
