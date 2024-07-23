import MobileAds from "@/components/ads/MobileAds";
import SubContent from "./SubContent";

export default function BodySubContent() {
  return (
    <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-2 px-2 gap-2">
      <SubContent subNews="sulawesi-tenggara" />
      <MobileAds number={0} />
      <SubContent subNews="ekonomi" />
      <MobileAds number={1} />
      <SubContent subNews="nasional" />
      <MobileAds number={2} />
      <SubContent subNews="olahraga" />
      <MobileAds number={3} />
    </div>
  );
}
