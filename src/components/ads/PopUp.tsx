"use client";
import { useState } from "react";
import { Button, Modal } from "antd";
import useSWR from "swr";
import Image from "next/image";
import { FetchAds } from "@/lib/axios/action";

export default function PopUp() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data, error, isLoading } = useSWR("pop_up", FetchAds, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <></>;
  if (data?.length === 0) return <></>;

  return (
    <>
      <Modal footer open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="flex justify-center py-4 items-center w-full h-full">
          {data && (
            <Image
              src={
                data[0].gambar?.formats.large?.url
                  ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${data[0].gambar?.formats.large?.url}`
                  : `/news.png`
              }
              alt="image"
              width={350}
              height={500}
              sizes="300"
            />
          )}
        </div>
      </Modal>
    </>
  );
}
