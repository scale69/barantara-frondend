import Category from "../[...slug]/Category";

export default function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  return <Category category={searchParams.query} />;
}
