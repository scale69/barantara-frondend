import { IAds } from "@/app/page";
import PopUp from "../ads/PopUp";
import Trending from "../trending-news/Trending";
import CenterContent from "./center-content/CenterContent";
import LeftContent from "./left-content/LeftContent";
import Mobile from "./Mobile";
import RightContent from "./right-content/RightContent";

// type Props =  {
//   adsLeft: ,
//   adsRight: IAds[],
//   adsPopUP: IAds
// }

// export default function Contetnt({adsLeft, adsRight, adsPopUP}:Props) {
export default function Contetnt({
  adsLeft,
  adsRight,
  adsPopUP,
}: {
  adsLeft: IAds[];
  adsRight: IAds[];
  adsPopUP: IAds[];
}) {
  return (
    <div className="z-10 w-full h-full  gap-4 justify-center text-sm flex flex-col lg:flex-row ">
      <PopUp />

      <LeftContent {...{ adsLeft }} />

      <CenterContent />

      <RightContent {...{ adsRight }} />

      <Mobile />
    </div>
  );
}
