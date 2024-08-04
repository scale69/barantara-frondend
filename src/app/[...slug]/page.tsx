import { useState } from "react";
import { notFound } from "next/navigation";
import Lock from "../lock";
import TentangKami from "./TentangKami";
import DetailPost from "./DetailPost";
import Category from "./Category";
import NotFound from "../not-found";
import TagsContent from "@/components/tags/TagsContent";
import Search from "@/components/search/Search";
import CardTags from "@/components/tags/CardTags";
import { fetchALLAds, filterPost, getPostBySlug } from "@/lib/axios/action";
import { IAds } from "../page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugs = params.slug;
  const slugLast = slugs[slugs.length - 1]; // dapatkan slug di index terakhir

  const post = await getPostBySlug(slugLast);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.judul,
    description: post.isi,
    openGraph: {
      images: [
        {
          url: `${process.env.BASE_URL_BACKEND}${post.gambar?.formats.small?.url}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const dataAds = (await fetchALLAds()) as IAds[];

  const category = [
    "sulawesi-tenggara",
    "sulawesi-tenggara/kendari",
    "sulawesi-tenggara/konawe",
    "sulawesi-tenggara/kolaka",
    "sulawesi-tenggara/muna-dan-muna-barat",
    "sulawesi-tenggara/baubau",
    "sulawesi-tenggara/kepulauan-buton",
    "hukum-dan-politik/hukum",
    "hukum-dan-politik/politik",
    "hukum-dan-politik",
    "kendari",
    "baubau",
    "kepulauan-buton",
    "kolaka",
    "konawe",
    "muna-dan-muna-barat",
    "hukum",
    "politik",
    "ekonomi",
    "olahraga",
    "nasional",
    "hiburan-dan-lifestyle",
    "artikel-dan-advertorial",
    "tentang-kami",
    "tags",
  ];

  const slugs = params.slug;
  const path1 = slugs[0];
  const path2 = slugs[1];
  const path3 = slugs[2];

  const path2segment = path1 + "/" + path2;

  if (path1 === "lock") {
    return <Lock />;
  }

  if (path1 === "tentang-kami") {
    return <TentangKami />;
  }

  if (slugs.length === 3) return <DetailPost dataAds={dataAds} slug={path3} />;

  if (slugs.length === 2) {
    if (path1.includes(`tags`)) {
      return (
        <Category dataAds={dataAds} titleCategory={path2} category={path1} />
      );
    }

    if (category.includes(path2)) {
      // jika urlnya kategory
      if (!category.includes(path2segment)) {
        return notFound();
      } else {
        return <Category dataAds={dataAds} category={path2} />;
      }
    } else {
      // jika urlnya slug
      return <DetailPost dataAds={dataAds} slug={path2} />;
    }
  }

  if (category.includes(path1)) {
    return <Category dataAds={dataAds} category={path1} />;
  } else {
    return <DetailPost dataAds={dataAds} slug={path1} />;
  }
}
