import { fetchAbout } from "@/lib/axios/action";
import { Empty, Spin } from "antd";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function TentangKami() {
  const { data, error, isLoading } = useSWR(`about`, fetchAbout, {
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
  return (
    <div className="flex  text-black flex-col  h-full w-full py-16 md:py-24 ">
      <div className="flex md:gap-5 justify-center w-full p-2 h-full">
        <div className=" flex flex-col justify-center items-center  w-full md:w-[900px]   h-full">
          <div className="  flex flex-col  w-full rounded-lg bg-zinc-50  shadow-md border h-full ">
            <span className="font-semibold uppercase text-slate-600 p-4  bg-slate-200">
              Tentang Kami
            </span>
            {!data && <Empty />}
            {data?.map((item: any) => (
              <div key={1} className="flex flex-col gap-2 p-4 w-full">
                <ReactMarkdown>{item.isi}</ReactMarkdown>
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar.formats.large?.url}`}
                  alt="gamabr"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={300}
                  height={300}
                  className="object-cover"
                />
                {/* {item?.gambar?.map((img: any) => (
                  <div key={img.id} className="flex">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL_BACKEND}${img.formats.large?.url}`}
                      alt="gamabr"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                ))} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
