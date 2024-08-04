import {
  fetchSosmed,
  fetchTopPost,
  fetchTopTrending,
} from "@/lib/axios/action";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const data = await fetchTopPost();
  const trending = await fetchTopTrending();
  const sosmed = await fetchSosmed();

  const facebook = sosmed.filter((item: any) => item.aplikasi === "facebook");
  const instagram = sosmed.filter((item: any) => item.aplikasi === "instagram");
  const email = sosmed.filter((item: any) => item.aplikasi === "email");
  const whatsapp = sosmed.filter((item: any) => item.aplikasi === "whatsapp");

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
                      {email[0] && (
                        <li>
                          Email Us:{" "}
                          <Link
                            href={`mailto:${email[0]?.url}`}
                            // href="mailto:infouemail@gmail.com"
                            target="_blank"
                          >
                            {email[0]?.url}
                          </Link>
                        </li>
                      )}
                      {whatsapp[0] && (
                        <li>
                          Contact:{" "}
                          <a href={`tel:+${whatsapp[0]?.url}`}>
                            +{whatsapp[0]?.url}
                          </a>
                        </li>
                      )}
                      <li>
                        <ul className="footer-social">
                          {facebook[0] && (
                            <li>
                              <Link href={`/${facebook[0]?.url}`}>
                                <i className="lab la-facebook-f" />
                              </Link>
                            </li>
                          )}
                          {instagram[0] && (
                            <li>
                              <Link href={`/${instagram[0]?.url}`}>
                                <i className="lab la-instagram" />
                              </Link>
                            </li>
                          )}
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
                            <Link href="/single-post-1 relative">
                              <Image
                                src={
                                  item.gambar?.formats.large?.url
                                    ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                                    : `/news.png`
                                }
                                alt="image"
                                width={500}
                                height={500}
                                className="h-full w-full object-cover"
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
                            <Link href="/single-post-1 relative">
                              <Image
                                src={
                                  item.gambar?.formats.large?.url
                                    ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${item.gambar?.formats.large?.url}`
                                    : `/news.png`
                                }
                                alt="image"
                                width={500}
                                height={500}
                                className="h-full w-full object-cover"
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
