"use client";

import { fetchTopPost, fetchTopTrending } from "@/lib/axios/action";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function Footer() {
  const { data, isLoading, error } = useSWR("topNews", fetchTopPost, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  const {
    data: trending,
    isLoading: tLoading,
    error: tError,
  } = useSWR("topTrending", fetchTopTrending, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error || tError) return <></>;
  if (isLoading || tLoading) return <></>;

  return (
    <>
      <footer className="footer-section">
        <div className="footer-top padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-item">
                  <div className="footer-content">
                    <ul className="contact-list">
                      <li>
                        Email Us:{" "}
                        <Link
                          href="mailto:infouemail@gmail.com"
                          target="_blank"
                        >
                          infouemail@gmail.com
                        </Link>
                      </li>
                      <li>
                        Contact:{" "}
                        <Link href="/tel:+5-784-8894-678">+5-784-8894-678</Link>
                      </li>
                      <li>
                        <ul className="footer-social">
                          <li>
                            <Link href="/#">
                              <i className="lab la-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="lab la-instagram" />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-item">
                  <h3 className="footer-header">Top News</h3>
                  <div className="footer-content">
                    <ul className="footer-post-list">
                      {data?.map((item: any) => {
                        const uploadTime = new Date(item.createdAt);

                        // Hitung jarak waktu antara sekarang dengan waktu upload
                        const timeAgo = formatDistanceToNowStrict(uploadTime, {
                          locale: id,
                        });
                        return (
                          <li key={item.id}>
                            <Link href="/single-post-1">
                              <img
                                src={
                                  item.gambar?.formats.large?.url
                                    ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                                    : `/news.png`
                                }
                                alt="post"
                              />
                            </Link>
                            <h6 className="post-title">
                              <Link
                                href={
                                  item.category?.includes("umum")
                                    ? `/${item.slug}`
                                    : `/${item.category}/${item.slug}`
                                }
                              >
                                {item.judul}
                                <span>{timeAgo} lalu</span>
                              </Link>
                            </h6>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-item">
                  <h3 className="footer-header">Top Trending</h3>
                  <div className="footer-content">
                    <ul className="footer-post-list">
                      {trending?.map((item: any) => {
                        const uploadTime = new Date(item.createdAt);

                        // Hitung jarak waktu antara sekarang dengan waktu upload
                        const timeAgo = formatDistanceToNowStrict(uploadTime, {
                          locale: id,
                        });
                        return (
                          <li key={item.id}>
                            <Link href="/single-post-1">
                              <img
                                src={
                                  item.gambar?.formats.large?.url
                                    ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                                    : `/news.png`
                                }
                                alt="post"
                              />
                            </Link>
                            <h6 className="post-title">
                              <Link
                                href={
                                  item.category?.includes("umum")
                                    ? `/${item.slug}`
                                    : `/${item.category}/${item.slug}`
                                }
                              >
                                {item.judul}
                                <span>{timeAgo} lalu</span>
                              </Link>
                            </h6>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ./ footer-top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrap">
              <div className="footer-logo">
                <Link href="/" className="flex gap-3 items-center">
                  <Image
                    src={"/logo.jpg"}
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    priority
                    width={30}
                    height={30}
                    sizes="300"
                    alt="logo"
                  />
                  <span className="text-red-300 text-sm">Barantara</span>
                </Link>
              </div>
              <ul className="footer-menu-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/sulawesi-tenggara">SULTRA</Link>
                </li>
                <li>
                  <Link href="/ekonomi">Ekonomi</Link>
                </li>
                <li>
                  <Link href="/olahraga">Olahraga</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ./ footer-bottom */}
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-wrap">
              <p>Scale {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        {/* ./ copyright-area */}
      </footer>
    </>
  );
}
