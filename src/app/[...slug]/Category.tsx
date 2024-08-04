import Ads from "@/components/ads/ads";
import CardCategory from "@/components/card/cardCategory";
import Trending from "@/components/trending-news/Trending";
import NotFound from "../not-found";
import MobileAds from "@/components/ads/MobileAds";
import CardSearch from "@/components/card/CardSearch";
import { SearchOutlined } from "@ant-design/icons";
import CardTags from "@/components/tags/CardTags";
import { notFound } from "next/navigation";
import Tags from "./Tags";
import { IAds } from "../page";
const Linkcategory = [
  "sulawesi-tenggara",
  "sulawesi-tenggara/kendari",
  "sulawesi-tenggara/konawe",
  "sulawesi-tenggara/kolaka",
  "sulawesi-tenggara/muna-dan-muna-barat",
  "sulawesi-tenggara/baubau",
  "sulawesi-tenggara/kepulauan-buton",
  "hukum-dan-politik/hukum",
  "hukum-dan-politik/politik",
  "hukum-dan-politik",
  "kendari",
  "baubau",
  "kepulauan-buton",
  "kolaka",
  "konawe",
  "muna-dan-muna-barat",
  "hukum",
  "politik",
  "ekonomi",
  "olahraga",
  "nasional",
  "hiburan-dan-lifestyle",
  "artikel-dan-advertorial",
  "tentang-kami",
  "search",
  "tags",
];
export default function Category({
  category,
  titleCategory,
  dataAds,
}: {
  category: any;
  titleCategory?: string;
  dataAds: IAds[];
}) {
  // if (!Linkcategory.includes(category)) return <NotFound />;

  const adsLeft = dataAds?.filter((item: any) => item.posisi === "left");
  const adsRight = dataAds?.filter((item: any) => item.posisi === "right");

  let title;
  let body;

  if (!Linkcategory.includes(category)) {
    title = (
      <div className="flex gap-2 items-center">
        <SearchOutlined />
        {(category as string)?.replaceAll("-", " ")}
      </div>
    );
  } else {
    title = (category as string)?.replaceAll("-", " ");
  }

  if (category == "tags") {
    if (!titleCategory) return notFound();
    body = <Tags titleCategory={titleCategory.replaceAll("%20", " ")} />;
  } else if (!Linkcategory.includes(category)) {
    body = <CardSearch category={category} />;
  } else {
    body = <CardCategory category={category} />;
  }

  return (
    <div className="flex  text-black flex-col  h-full w-full py-16 md:py-24 ">
      <div className="flex md:gap-5 justify-center w-full p-2 h-full">
        {/* iklan kiri */}
        <div className="hidden lg:flex  flex-col gap-4 ">
          <Trending />
          <Ads dataAds={adsLeft} />
        </div>

        {/* isi content */}

        <div className=" flex flex-col justify-center items-center  w-full md:w-[720px]   h-full">
          <div className="  flex flex-col  w-full rounded-lg bg-zinc-50  shadow-md border h-full ">
            <span className="font-semibold uppercase text-slate-600 p-4  bg-slate-200">
              {title}
            </span>
            {/* {!Linkcategory.includes(category) ? (
              <CardSearch category={category} />
            ) : (
              <CardCategory category={category} />
            )} */}
            {body}
          </div>
          {/* <SeputarBerita subNews="sulawesi-tenggara" />
        <MobileAds number={0} /> */}
        </div>

        {/* batas isi */}

        {/* iklan kanan */}
        <div className="hidden lg:block">
          <CardTags category={category} />
          <Ads dataAds={adsRight} />
        </div>
        {/* iklan moile */}

        {/*  */}
      </div>
      <div className=" w-full px-2 py-4 flex flex-col lg:flex-row gap-4">
        <div className="md:hidden space-y-5 w-full">
          <Trending />
          <CardTags category={category} />
          <MobileAds number={0} />
        </div>
      </div>
    </div>
  );
}
