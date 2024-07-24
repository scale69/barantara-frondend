import { fetchALLAds } from "@/lib/axios/action";
import Category from "../[...slug]/Category";
import { IAds } from "../page";

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const dataAds = (await fetchALLAds()) as IAds[];

  return <Category dataAds={dataAds} category={searchParams.query} />;
}
