import Trending from "../trending-news/Trending";
import CenterContent from "./center-content/CenterContent";
import LeftContent from "./left-content/LeftContent";
import Mobile from "./Mobile";
import RightContent from "./right-content/RightContent";

export default function Contetnt() {
  return (
    <div className="z-10 w-full h-full  gap-4 justify-center text-sm flex flex-col lg:flex-row ">
      <LeftContent />

      <CenterContent />

      <RightContent />

      <Mobile />
    </div>
  );
}
