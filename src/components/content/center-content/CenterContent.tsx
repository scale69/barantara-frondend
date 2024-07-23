"use client";
import { fetchPost } from "@/lib/axios/action";
import CardNews from "@/components/card/CardNews";
import useSWR from "swr";
import { Spin } from "antd";

export default function CenterContent() {
  const { data, error, isLoading } = useSWR("getPost", fetchPost, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <div></div>;
  if (isLoading) {
    return (
      <div className="flex fixed top-0 right-0 z-20  justify-center items-center w-full   h-screen">
        <Spin />
      </div>
    );
  }
  // const data = await fetchPost();

  return (
    <div className=" flex flex-col items-center  w-full rounded-lg shadow-md border lg:w-[720px]  bg-zinc-50 h-full">
      <span className="font-semibold w-full p-4  bg-slate-200">
        Berita Terkini
      </span>
      <CardNews data={data} />
    </div>
  );
}
