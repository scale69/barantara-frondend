import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/global/navbar/navbar";
import Footer from "@/components/global/Footer/footer";

// import "@/node_modules/react-modal-video/css/modal-video.css";
// import { Inter, Jost } from 'next/font/google'
import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/common-style.css";
import "/public/assets/css/dark-mode.css";
import "/public/assets/css/line-awesome.min.css";
import "/public/assets/css/main.css";
import "/public/assets/css/posty-color.css";
import "/public/assets/css/swiper.min.css";
import "/public/assets/css/venobox.min.css";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Barantara",
  description: "Berita Sulwasi Tenggara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"w-full h-screen bg-white "}>
        <AntdRegistry>
          <Navbar />
          <div className={poppins.className}>{children}</div>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
