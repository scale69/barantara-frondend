"use client";

import FiledAPI from "@/app/filedAPI";
import { fetchSosmed, filterSosmed } from "@/lib/axios/action";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function BeanerAds() {
  const { data, isLoading, error } = useSWR("whatsapp", filterSosmed, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  // if (!data) return <FiledAPI />;
  if (error) return <></>;
  if (isLoading) return <></>;
  return (
    <div className="">
      <section className="subscribe-section bg-grey-2 px-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="subscribe-content">
                <h3 className="title">Hubungi kami untuk pasang iklan</h3>
                <a
                  href={`//${data[0]?.url}`}
                  target="_blank"
                  id="submit"
                  className="default-btn"
                  type="submit"
                >
                  <i className="lab la-telegram-plane pr-2" />
                  via whatsapp
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-thumb">
                <div className="line relative" />
                <Image
                  alt="image"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                  src="/assets/img/images/subscribe-img.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
