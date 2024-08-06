"use client";
import { usePathname } from "next/navigation";
import {
  FacebookMessengerShare,
  FacebookShare,
  WhatsappShare,
} from "react-share-lite";
export default function ShareButton() {
  const pathname = usePathname();
  const url = "https://barantara.com";
  console.log({ pathname });

  return (
    <div className="w-full flex gap-2">
      <WhatsappShare size={30} url={`${url}${pathname}`} />
      <FacebookShare size={30} url={`${url}${pathname}`} />
    </div>
  );
}
