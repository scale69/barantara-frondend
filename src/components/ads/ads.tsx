import { FetchAds } from "@/lib/axios/action";
// import { Ads, fetchAds, fetchAdsLeft } from "@/lib/axios/action";
import { Spin } from "antd";
import Image from "next/image";
import useSWR from "swr";

interface Props {
  position: string;
}

export default async function Ads({
  position,
  number,
}: {
  position: string;
  number?: number;
}) {
  const data = await FetchAds(position);
  // const { data, error, isLoading } = useSWR(position, FetchAds, {
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  //   revalidateIfStale: false,
  // });

  // if (error) return <div>failed</div>;
  // if (isLoading) return <></>;
  const default_number = number || 0;
  if (!data) {
    return <></>;
  }
  if (!data[default_number]) {
    return <></>;
  }

  return (
    <div className="flex flex-col  justify-center items-center gap-4 w-full lg:max-w-[350px] h-max">
      {position?.includes("header") || position?.includes("mobile") ? (
        <AdsImage
          srcUrl={
            data[default_number]?.gambar?.formats.large?.url
              ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${data[default_number]?.gambar?.formats.large?.url}`
              : `/news.png`
          }
        />
      ) : (
        data?.map((item: any) => (
          <AdsImage
            key={item.id}
            srcUrl={
              item.gambar?.formats.large?.url
                ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                : `/news.png`
            }
          />
        ))
      )}
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
