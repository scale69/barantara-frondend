"use client";

import MobileAds from "@/components/ads/MobileAds";
import CardSearch from "@/components/card/CardSearch";
import Search from "@/components/search/Search";
import Trending from "@/components/trending-news/Trending";
import { Header } from "antd/es/layout/layout";
import Category from "../[...slug]/Category";

export default function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  return <Category category={searchParams.query} />;
}
