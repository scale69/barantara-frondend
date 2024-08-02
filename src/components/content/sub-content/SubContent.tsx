"use client";

import { filterSubNews } from "@/lib/axios/action";
import { ClockCircleOutlined } from "@ant-design/icons";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import FiledAPI from "@/app/filedAPI";

export default function SubContent({ subNews }: { subNews: string }) {
  const { data, error, isLoading } = useSWR(subNews, filterSubNews, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <FiledAPI />;
  if (isLoading) return <></>;

  if (data?.length === 0) return <></>;
  return (
    <div className=" rounded-lg mt-5 shadow-md flex-col gap-2 flex  w-full h-max pb-10  bg-slate-50">
      <span className="font-semibold text-sm text-slate-700 p-4 uppercase w-full bg-slate-200">
        {subNews}
      </span>
      {data?.map((item: any) => {
        const uploadTime = new Date(item.createdAt);

        // Hitung jarak waktu antara sekarang dengan waktu upload
        const timeAgo = formatDistanceToNowStrict(uploadTime, { locale: id });

        return (
          <div key={item.id} className=" flex flex-col px-2">
            <div className=" hover:shadow-md border rounded-sm overflow-hidden">
              <Link
                href={
                  item.category?.includes("umum")
                    ? `/${item.slug}`
                    : `/${item.category}/${item.slug}`
                }
                className=" flex gap-2 p-2 items-center w-full"
              >
                <div className="relative h-16 md:h-20  flex  aspect-square items-center justify-center">
                  <Image
                    src={
                      item.gambar?.formats.large?.url
                        ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                        : `/news.png`
                    }
                    fill
                    sizes="300"
                    alt={item.judul}
                    className="  object-cover "
                  />
                </div>
                <div className="flex flex-col px-4 py-2 gap-1">
                  <div className="flex items-center gap-2">
                    <ClockCircleOutlined className="text-xs" />
                    <span className="text-xs text-slate-500">
                      {timeAgo} lalu
                    </span>
                  </div>
                  <span className="text-xs font-semibold hover:underline hover:text-sky-700  ">
                    {item.judul}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
      <Link
        className="bg-slate-200 italic text-xs w-max px-4 py-2 rounded-md ml-5"
        href={subNews}
      >
        Selengkapnya
      </Link>
    </div>
  );
}
