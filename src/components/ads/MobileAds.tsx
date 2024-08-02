"use client";
import FiledAPI from "@/app/filedAPI";
import { FetchAds, fetchMobileAds } from "@/lib/axios/action";
import Image from "next/image";
import { notFound } from "next/navigation";
import useSWR from "swr";

export default function MobileAds({ number }: { number: number }) {
  const { data, error, isLoading } = useSWR("all", fetchMobileAds, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <FiledAPI />;
  if (isLoading) return <></>;
  if (data) {
    if (!data[number]) {
      return <></>;
    }
  }
  return (
    <>
      {data && (
        <div
          key={data[number]?.id}
          className="flex flex-col justify-center  items-center  lg:hidden  pt-4  w-full  h-max "
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${data[number]?.gambar?.formats.large?.url}`}
            alt="image"
            style={{
              width: "auto",
              height: "100%",
            }}
            width={500}
            height={750}
            // fill
            loading="lazy"
            sizes="300"
          />
        </div>
      )}
    </>
  );
}
