"use client";

import { filterPost } from "@/lib/axios/action";
import {
  ClockCircleOutlined,
  RadiusBottomleftOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
// import NotFoundCustom from "@/app/notPage";
import { Spin } from "antd";
import Ads from "@/components/ads/ads";
import Trending from "@/components/trending-news/Trending";
import CardTags from "@/components/tags/CardTags";
import NotFound from "../not-found";
import MobileAds from "@/components/ads/MobileAds";
import { notFound } from "next/navigation";
import { MdPreview, MdCatalog } from "md-editor-rt";

export default function DetailPost({ slug }: { slug: any }) {
  const { data, error, isLoading } = useSWR(`${slug}`, filterPost, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <div>eroor</div>;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full   h-screen">
        <Spin />
      </div>
    );
  }
  if (!data) return notFound();
  if (!data[0]?.category) {
    return notFound();
  }
  const dateStr = data[0]?.createdAt;
  const date = new Date(dateStr);
  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };

  const formattedDate = date.toLocaleDateString("id-ID", optionsDate);
  const formattedTime = date.toLocaleTimeString("id-ID", optionsTime);

  const resultTime = `${formattedDate} : ${formattedTime}`;

  return (
    // <div className="flex text-sm justify-center text-black  items-center flex-col h-full w-full py-16 md:py-24 ">
    //   <div className="flex gap-5 justify-center py-5  w-full h-full  px-5">
    <div className="flex justify-center w-full   h-full py-24 px-2">
      <div className="z-10 w-full h-full gap-5  justify-center text-sm flex flex-col lg:flex-row  ">
        <div className="lg:flex hidden gap-5 w-max flex-col">
          <Trending />
          <Ads position="left" />
        </div>
        {data?.map((item: any) => (
          <>
            <div
              key={item.id}
              className=" flex py-14 flex-col gap-5 p-4 md:p-10  max-w-3xl rounded-lg bg-zinc-50 shadow-md border h-full "
            >
              {/* nav */}
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold text-slate-900 py-5">
                  {item.judul}
                </span>
                <div className="flex items-center gap-2 ">
                  <ClockCircleOutlined />
                  <span className="text-sm text-zinc-500">{resultTime}</span>
                </div>
                <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
                  <Image
                    className="object-cover"
                    src={
                      item.gambar?.formats.large?.url
                        ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                        : `/news.png`
                    }
                    alt="image"
                    fill
                    priority
                    sizes="300"
                  />
                </div>
                <span className="text-xs italic">{item.gambar?.caption}</span>
              </div>
              {/* body */}
              {/* <ReactMarkdown className={""}>{item.isi}</ReactMarkdown> */}
              <MdPreview editorId={"isi"} modelValue={item.isi} />
              <div className="my-10 flex  flex-col py-2 pr-20 pl-4 bg-slate-300 ">
                <div className="flex  items-center gap-2">
                  <RadiusBottomleftOutlined />
                  <span className="text-sm">Reporter :</span>
                  <span className="text-sm">{item.reporter}</span>
                </div>
              </div>
            </div>

            {/* batas isi */}
            {/* iklan kanan */}
            <div className="   gap-5 flex flex-col">
              <CardTags category={item.category} />
              <MobileAds number={0} />
              <Ads position="right" />
              <div className="lg:hidden">
                <Trending />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
