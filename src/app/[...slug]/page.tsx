"use client";

// import NotFoundCustom from "../notPage";
// import Lock from "../lock";
import { useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Lock from "../lock";
import TentangKami from "./TentangKami";
import DetailPost from "./DetailPost";
import Category from "./Category";
import NotFound from "../not-found";
import TagsContent from "@/components/tags/TagsContent";
import Search from "@/components/search/Search";

export default function Page({ params }: { params: { slug: string[] } }) {
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

  const [on, setOn] = useState(false);
  const router = useRouter();

  if (on == true) {
    router.push("/lock");
  }

  if (path1 === "lock") {
    return <Lock />;
  }
  if (path1 === "tentang-kami") {
    return <TentangKami />;
  }

  if (slugs.length === 3) return <DetailPost slug={path3} />;

  if (slugs.length === 2) {
    if (path1.includes(`tags`)) {
      return <TagsContent category={path2} />;
    }

    if (category.includes(path2)) {
      // jika urlnya kategory
      if (!category.includes(path2segment)) {
        return notFound();
      } else {
        return <Category category={path2} />;
      }
    } else {
      // jika urlnya slug
      return <DetailPost slug={path2} />;
    }
  }

  if (category.includes(path1)) {
    return <Category category={path1} />;
  } else {
    return <DetailPost slug={path1} />;
  }
}
