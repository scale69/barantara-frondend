import { fetchSlide } from "@/lib/axios/action";
import Image from "next/image";

export default async function SliderFetchActiton({
  contentStyle,
}: {
  contentStyle: any;
}) {
  const slide = await fetchSlide();
  return <></>;
}
