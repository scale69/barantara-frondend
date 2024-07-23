"use client";

import { Empty, Spin } from "antd";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fetchPost } from "@/lib/axios/action";

const sultra = [
  "kendari",
  "baubau",
  "kabupaten-buton",
  "kolaka",
  "konawe",
  "muna-dan-muna-barat",
];

const hp = ["hukum", "politik"];

export default function CardNews({ data }: { data: any }) {
  const [on, setOn] = useState(false);
  const router = useRouter();
  if (on == true) {
    router.push("/lock");
  }

  return (
    <ul className="flex flex-col gap-4 p-4">
      {data?.length === 0 && (
        <div className="flex justify-center items-center w-full">
          <Empty />
        </div>
      )}
      {data?.map((item: any) => {
        const uploadTime = new Date(item.createdAt);

        // Hitung jarak waktu antara sekarang dengan waktu upload
        const timeAgo = formatDistanceToNowStrict(uploadTime, { locale: id });

        return (
          <li key={item.id} className="flex h-max md:h-40  justify-center">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative w-1/4   m-0 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <Image
                  src={
                    item.gambar?.formats.large?.url
                      ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                      : `/news.png`
                  }
                  alt="image"
                  sizes="300"
                  fill
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="  py-2 px-4 overflow-hidden">
                <div className="flex items-center py-2 gap-2">
                  {item.trending && (
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
                    item.category?.includes("umum")
                      ? `/${item.slug}`
                      : `/${item.category}/${item.slug}`
                  }
                  className="mb-2 block hover:text-sky-700  text-xs -semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                  {item.judul}
                  <p className="hidden hover:underline md:block text-xs  h-12 overflow-hidden    text-gray-700 antialiased">
                    {item.isi}
                  </p>
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
