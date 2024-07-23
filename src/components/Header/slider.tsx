"use client";

import { Carousel } from "antd";
import { Suspense } from "react";
import useSWR from "swr";
import Image from "next/image";
import { fetchSlide, fetchTopPost } from "@/lib/axios/action";
import SliderFetchActiton from "./sliderFetchActiton";
import Link from "next/link";
const contentStyle: React.CSSProperties = {
  // height: "300px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  background: "#364d79",
};

export default function Slider() {
  const {
    data: slide,
    isLoading,
    error,
  } = useSWR("slidesNews", fetchSlide, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  const {
    data: topPost,
    isLoading: lPost,
    error: ePost,
  } = useSWR("tPost", fetchTopPost, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  if (error || ePost) return <div>failed to load</div>;
  if (isLoading || lPost)
    return (
      <div className={` w-full h-full`} style={contentStyle}>
        Barantara SUltra
      </div>
    );
  return (
    <div className="z-10 w-full items-center  justify-between  font-mono text-sm">
      <Carousel arrows infinite={true} autoplay draggable>
        {/* <div className="">
          <div
            style={contentStyle}
            className="flex w-full h-48 md:h-72 md:py-4  justify-center items-center"
          >
            <div className="flex flex-col w-[720px] h-full bg-red-500">
              <p className="">Jualan Online Mudah dan Cepat,</p>
              <p className="">
                Dapatkan Keuntungan Maksimal dengan Iklan Kami.
              </p>
            </div>
          </div>
        </div> */}

        {slide?.map((item: any) => (
          <div key={item.id} className="">
            <div
              style={contentStyle}
              className="flex w-full h-48 md:h-72 md:py-4 justify-center   items-center"
            >
              <div className="flex relative  items-center  w-full md:w-[720px] px-2 h-full">
                <Image
                  className="object-center bg-red-300 flex "
                  src={
                    item.gambar?.formats.large?.url
                      ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                      : `/news.png`
                  }
                  alt="gambar"
                  width={720}
                  height={200}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
        {topPost?.map((item: any) => (
          <div key={item.id} className="relative ">
            <div
              style={contentStyle}
              className="flex w-full h-48 md:h-72 md:py-4 justify-center   items-center"
            >
              <div className="flex relative    flex-col w-full md:w-[720px] h-full">
                <Image
                  className="object-cover"
                  src={
                    item.gambar?.formats.large?.url
                      ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                      : `/news.png`
                  }
                  alt="gambar"
                  fill
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-2 w-full md:w-max px-5 py-2 text-xs bg-white post-content ">
                <h6 className="title">
                  <Link
                    href={
                      item.category?.includes("umum")
                        ? `/${item.slug}`
                        : `/${item.category}/${item.slug}`
                    }
                  >
                    {item.judul}
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
