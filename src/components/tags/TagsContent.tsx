"use client";

import Ads from "@/components/ads/ads";
import CardCategory from "@/components/card/cardCategory";
import Trending from "@/components/trending-news/Trending";
import HeaderAds from "../ads/HeaderAds";
import { Spin } from "antd";
import useSWR from "swr";
import { filterTags } from "@/lib/axios/action";
import { ClockCircleOutlined, TagsOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import MobileAds from "../ads/MobileAds";

export default function TagsContent({ category }: { category: string }) {
  const { data, error, isLoading } = useSWR(
    category.replaceAll("-", " "),
    filterTags,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) {
    return (
      <div className="flex  justify-center items-center w-full   h-screen">
        <Spin />
      </div>
    );
  }

  return (
    <main className="flex flex-col  text-black h-full  py-16 gap-2 md:py-24 ">
      {/* ikan header */}
      <div className="flex items-center justify-center w-full px-2  ">
        <HeaderAds />
      </div>
      {/* <MenuPhone /> */}

      {/* ---- batas header ----- */}

      <div className="flex md:gap-5 justify-center w-full p-2 h-full ">
        {/* iklan kiri */}
        <div className="hidden lg:flex flex-col">
          <Trending />
          <Ads position="left" />
        </div>

        {/* isi content */}
        {/* <div className=" flex flex-col justify-center items-center w-full md:w-[720px]  md:gap-4  h-full"> */}
        <div className=" flex  justify-center items-center  w-full md:w-[720px]   h-full">
          <div className="  flex flex-col gap-5w-full rounded-lg bg-zinc-50  shadow-md border h-full ">
            <div className="flex items-center gap-2 font-semibold uppercase text-slate-600 p-4  bg-slate-200">
              <span>Tags</span>
              <TagsOutlined />
              <span className="">
                {(category as string)?.replaceAll("%20", " ")}
              </span>
            </div>
            {/* top trending */}
            {/* <TopTrnding /> */}
            {/* end top trending */}
            {data?.map((item: any) => (
              <div className="flex flex-col gap-2 justify-center p-4 w-full">
                {item.beritas?.map((x: any) => {
                  const uploadTime = new Date(x.createdAt);

                  // Hitung jarak waktu antara sekarang dengan waktu upload
                  const timeAgo = formatDistanceToNowStrict(uploadTime, {
                    locale: id,
                  });
                  return (
                    <li
                      key={x.id}
                      className="flex h-max md:h-40 w-full justify-center"
                    >
                      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative w-1/4   m-0 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                          <Image
                            src={
                              x.gambar?.formats.large?.url
                                ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${x.gambar?.formats.large?.url}`
                                : `/news.png`
                            }
                            alt="image"
                            sizes="300"
                            fill
                            priority
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="  py-2 px-6 overflow-hidden">
                          <div className="flex items-center py-2 gap-2">
                            {x.trending && (
                              <span className="mb-1 block  text-sm font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                                Trending
                              </span>
                            )}
                            <div className="flex items-center gap-2">
                              <ClockCircleOutlined className="text-xs" />
                              <span className="text-xs text-slate-500">
                                {timeAgo} lalu
                              </span>
                            </div>
                          </div>

                          <Link
                            href={
                              x.category?.includes("umum")
                                ? `/${x.slug}`
                                : `/${x.category}/${x.slug}`
                            }
                            className="mb-2 block hover:text-sky-700  text-xs -semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                          >
                            {x.judul}
                            <p className="hidden hover:underline md:block text-xs  h-12 overflow-hidden    text-gray-700 antialiased">
                              {item.isi}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            ))}
          </div>
          {/* <SeputarBerita subNews="sulawesi-tenggara" />
        <MobileAds number={0} /> */}
        </div>

        {/* batas isi */}

        {/* iklan kanan */}
        <div className="hidden">{/* <Ads position="right" /> */}</div>
        {/* iklan moile */}

        {/*  */}
      </div>
      <div className="lg:hidden  w-full px-2 flex flex-col  gap-4">
        <Trending />
        <MobileAds number={0} />
      </div>
    </main>
  );
}
