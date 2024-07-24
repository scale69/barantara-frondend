import { fetchTrending } from "@/lib/axios/action";
import { ClockCircleOutlined } from "@ant-design/icons";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

export default async function Trending() {
  const data = await fetchTrending();

  if (data?.length === 0) return <></>;
  return (
    <div className="flex relative w-full lg:w-[350px] rounded-lg shadow-md  flex-col overflow-x-hidden h-max lg:max-h-72 lg:overflow-y-scroll  pb-4  bg-slate-50">
      <span className=" sticky top-0 w-full  z-20 font-semibold p-4  bg-slate-200">
        Berita Trending
      </span>
      <div className="flex flex-col gap-2 p-2 ">
        {data?.map((item: any) => {
          const uploadTime = new Date(item.createdAt);

          // Hitung jarak waktu antara sekarang dengan waktu upload
          const timeAgo = formatDistanceToNowStrict(uploadTime, { locale: id });

          return (
            <div
              key={item.id}
              className=" hover:shadow-md border rounded-sm overflow-hidden"
            >
              <Link
                href={
                  item.category?.includes("umum")
                    ? `/${item.slug}`
                    : `/${item.category}/${item.slug}`
                }
                className="flex gap-2 items-center  w-full "
              >
                <div className="relative h-16 flex justify-center items-center aspect-square">
                  <Image
                    src={
                      item.gambar?.formats.large?.url
                        ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                        : `/news.png`
                    }
                    fill
                    sizes="300"
                    alt={item.judul}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col px-4 py-2 gap-1">
                  <div className="flex items-center gap-2">
                    <ClockCircleOutlined className="text-xs " />
                    <span className="text-xs text-slate-500">
                      {timeAgo} lalu
                    </span>
                  </div>
                  <span className="text-xs font-semibold hover:underline hover:text-sky-700 ">
                    {item.judul}
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
