import Ads from "@/components/ads/ads";

export default function RightContent() {
  return (
    <div className="hidden w-[350px] lg:flex   flex-col gap-10">
      <Ads position="right" />
    </div>
  );
}
