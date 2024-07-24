import { FetchAds } from "@/lib/axios/action";
// import { Ads, fetchAds, fetchAdsLeft } from "@/lib/axios/action";
import { Spin } from "antd";
import Image from "next/image";
import useSWR from "swr";

import { IAds } from "@/app/page";

interface Props {
  // position: string;
  dataAds: IAds[];
  number?: number;
}

export default async function Ads({
  dataAds,
  // position,
  number,
}: Props) {
  // const data = await FetchAds(position);

  // const { data, error, isLoading } = useSWR(position, FetchAds, {
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  //   revalidateIfStale: false,
  // });

  // if (error) return <div>failed</div>;
  // if (isLoading) return <></>;

  // const default_number = number || 0;

  // if (!data) {
  //   return <></>;
  // }
  // if (!data[default_number]) {
  //   return <></>;
  // }
  // dataAds[0];
  return (
    <div className="flex flex-col  justify-center items-center gap-4 w-full lg:max-w-[350px] h-max">
      {/* {position?.includes("header") || position?.includes("mobile") ? (
        <AdsImage
          srcUrl={
            data[default_number]?.gambar?.formats.large?.url
              ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${data[default_number]?.gambar?.formats.large?.url}`
              : `/news.png`
          }
        />
      ) : ( */}
      {dataAds?.map((item: any) => (
        <AdsImage
          key={item.id}
          srcUrl={
            item.gambar?.formats.large?.url
              ? // item.gambar.url
                `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
              : `/news.png`
          }
        />
      ))}
      {/* )} */}
    </div>
  );
}

const AdsImage = ({ srcUrl }: { srcUrl: any }) => {
  return (
    <Image
      src={srcUrl}
      alt="image"
      style={{
        width: "auto",
        height: "100%",
      }}
      width={720}
      height={750}
      // fill
      loading="lazy"
      sizes="300"
    />
  );
};
