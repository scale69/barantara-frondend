import Ads from "@/components/ads/ads";
import CardCategory from "@/components/card/cardCategory";
import Trending from "@/components/trending-news/Trending";
import NotFound from "../not-found";
import MobileAds from "@/components/ads/MobileAds";
import CardSearch from "@/components/card/CardSearch";
import { SearchOutlined } from "@ant-design/icons";
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
];
export default function Category({ category }: { category: any }) {
  // if (!Linkcategory.includes(category)) return <NotFound />;

  return (
    <div className="flex  text-black flex-col  h-full w-full py-16 md:py-24 ">
      <div className="flex md:gap-5 justify-center w-full p-2 h-full">
        {/* iklan kiri */}
        <div className="hidden lg:flex  flex-col gap-4 ">
          <Trending />
          <Ads position="left" />
        </div>

        {/* isi content */}

        <div className=" flex flex-col justify-center items-center  w-full md:w-[720px]   h-full">
          <div className="  flex flex-col  w-full rounded-lg bg-zinc-50  shadow-md border h-full ">
            <span className="font-semibold uppercase text-slate-600 p-4  bg-slate-200">
              {!Linkcategory.includes(category) ? (
                <div className="flex gap-2 items-center">
                  <SearchOutlined />
                  {(category as string)?.replaceAll("-", " ")}
                </div>
              ) : (
                (category as string)?.replaceAll("-", " ")
              )}
            </span>

            {!Linkcategory.includes(category) ? (
              <CardSearch category={category} />
            ) : (
              <CardCategory category={category} />
            )}
          </div>
          {/* <SeputarBerita subNews="sulawesi-tenggara" />
        <MobileAds number={0} /> */}
        </div>

        {/* batas isi */}

        {/* iklan kanan */}
        <div className="hidden lg:block">
          <Ads position="right" />
        </div>
        {/* iklan moile */}

        {/*  */}
      </div>
      <div className=" w-full px-2 py-4 flex flex-col lg:flex-row gap-4">
        <div className="md:hidden w-full">
          <Trending />
          <MobileAds number={0} />
        </div>
      </div>
    </div>
  );
}
