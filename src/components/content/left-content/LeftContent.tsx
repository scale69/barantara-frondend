import Ads from "@/components/ads/ads";
import Trending from "@/components/trending-news/Trending";

import { IAds } from "@/app/page";

interface Props {
  adsLeft: IAds[];
}

export default function LeftContent({ adsLeft }: Props) {
  return (
    <div className="hidden w-[350px] lg:flex h-full   flex-col gap-5">
      <Trending />
      {/* <AddsLeft /> */}
      <Ads dataAds={adsLeft} />
    </div>
  );
}
