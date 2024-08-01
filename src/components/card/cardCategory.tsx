"use client";

import { fetchPost, filterSubBerita, filterSubNews } from "@/lib/axios/action";
import { Empty, Pagination, Spin } from "antd";
import Link from "next/link";
import Image from "next/image";
import useSWR, { useSWRConfig } from "swr";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import { ClockCircleOutlined } from "@ant-design/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";
import NotFound from "@/app/not-found";
const sultra = [
  "kendari",
  "baubau",
  "kabupaten-buton",
  "kolaka",
  "konawe",
  "muna-dan-muna-barat",
];

const hp = ["hukum", "politik"];
export default function CardCategory({ category }: { category: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  let categoryFilter;
  const pageNumber = searchParams.get("page") || 1;
  const pageSize = 7;
  if (category == "hukum") {
    categoryFilter = "hukum-dan-politik/hukum";
  } else if (category == "politik") {
    categoryFilter = "hukum-dan-politik/politik";
  } else {
    categoryFilter = category;
  }

  const { data, error, isLoading } = useSWR(
    `/api/posts?filters[category][$eqi]=${categoryFilter}&pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}&sort[0]=createdAt:desc&&populate=*`,
    filterSubBerita,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full   h-[350px]">
        <Spin />
      </div>
    );
  }

  const totalCount = data?.meta?.pagination.pageCount * 10;

  return (
    <div className="flex flex-col gap-2 p-4 w-full">
      {data?.data?.length === 0 && (
        <div className="flex justify-center items-center w-full">
          <Empty />
        </div>
      )}
      {data?.data?.map((item: any) => {
        const uploadTime = new Date(item.createdAt);

        // Hitung jarak waktu antara sekarang dengan waktu upload
        const timeAgo = formatDistanceToNowStrict(uploadTime, { locale: id });

        return (
          <div
            key={item.id}
            className="flex  md:h-40 w-full h-full justify-center"
          >
            <div className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
              <div className="  py-2 px-6 overflow-hidden">
                <div className="flex items-center py-2 gap-2">
                  {item.trending && (
                    <span className="mb-1 block font-sans text-sm font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
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
                  href={`/${category}/${item.slug}`}
                  className="mb-2 block hover:text-sky-700  font-sans text-xs font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                  {item.judul}
                  <p className="hidden hover:underline md:block text-xs  h-12 overflow-hidden font-sans  font-normal  text-gray-700 antialiased">
                    {item.isi}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      {data?.data?.length >= pageSize && (
        <Pagination
          onChange={(a) => {
            router.push(`?page=${a}`);
          }}
          defaultCurrent={1}
          current={Number(pageNumber)}
          total={totalCount}
          itemRender={(currentPage, type, originalElement) => {
            {
              if (type === "prev") {
                return (
                  <Link href={`${pathname}?page=${Number(pageNumber) - 1}`}>
                    mundur
                  </Link>
                );
              }
              if (type === "next") {
                return (
                  <Link href={`${pathname}?page=${Number(pageNumber) + 1}`}>
                    maju
                  </Link>
                );
              }
              if (type === "page") {
                return (
                  <Link href={`${pathname}?page=${currentPage}`}>
                    {currentPage}
                  </Link>
                );
              }
              return originalElement;
            }
          }}
        />
      )}
    </div>
  );
}
