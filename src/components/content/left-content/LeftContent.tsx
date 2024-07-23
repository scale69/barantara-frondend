import Ads from "@/components/ads/ads";
import Trending from "@/components/trending-news/Trending";

export default function LeftContent() {
  return (
    <div className="hidden w-[350px] lg:flex h-full   flex-col gap-5">
      <Trending />
      {/* <AddsLeft /> */}
      <Ads position="left" />
    </div>
  );
}
