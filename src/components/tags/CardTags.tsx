"use client";

import { fetchTags } from "@/lib/axios/action";
import { TagsOutlined } from "@ant-design/icons";
import { Empty } from "antd";

import Link from "next/link";
import useSWR from "swr";

export default function CardTags({ category }: { category: string }) {
  const { data, error, isLoading } = useSWR(category, fetchTags, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <></>;
  if (category === "umum" || data?.length === 0) {
    return (
      <div className="flex flex-col gap-2 rounded-lg shadow-md overflow-x-hidden  pb-10 relative w-full lg:w-[350px]">
        <div className=" sticky flex gap-2 top-0 w-full  z-20 font-semibold p-4  bg-slate-200">
          <TagsOutlined />
          <span>Tags</span>
        </div>
        <Empty />
      </div>
    );
  }

  return (
    <div className="flex relative w-full lg:w-[350px]  rounded-lg shadow-md  flex-col gap-2 overflow-x-hidden h-max lg:max-h-72 lg:overflow-y-scroll  pb-4  bg-slate-50">
      <div className=" sticky flex gap-2 top-0 w-full  z-20 font-semibold p-4  bg-slate-200">
        <TagsOutlined />
        <span>Tags</span>
      </div>

      <div className="flex flex-col gap-2 p-2 ">
        {data?.map((item: any) => {
          return (
            <div key={item.id} className="   overflow-hidden">
              <Link
                href={`/tags/${item.name}`}
                className="flex gap-2 items-center  w-full "
              >
                <div className="flex items-center px-4 gap-2">
                  <TagsOutlined />
                  <span className="text-xs font-semibold hover:underline hover:text-sky-700 ">
                    {item.name}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
