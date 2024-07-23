"use client";
import { Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

export default function Search() {
  // const [query, setQuery] = useState('')

  const router = useRouter();
  const [query, setQuery] = useQueryState("query", { defaultValue: "" });

  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-full lg:max-w-3xl">
        <div className="relative px-2">
          <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            id="default-search"
            className="block py-3 px-8 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=" Temukan Berita"
            required
            value={query}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                router.push(`/search?query=${query}`);
              }
            }}
          />
          <Link
            href={`/search?query=${query}`}
            className="text-white absolute right-4 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cari
          </Link>
        </div>
      </div>
    </div>
  );
}
