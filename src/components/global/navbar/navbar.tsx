import Link from "next/link";
import Image from "next/image";
import DrawerNav from "./DrawerNav";
import MenuBrowser from "./MenuBrowser";

export default function Navbar() {
  return (
    <div className="fixed z-50 flex items-center justify-between bg-white w-full px-2 md:px-5 lg:px-10 py-2  shadow-md">
      <Link href={"/"} className="flex items-center gap-2">
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
        <span className="font-semibold">Barantara</span>
      </Link>
      <div className="md:hidden">
        <DrawerNav />
      </div>
      <div className="hidden md:flex float-end  ">
        <MenuBrowser />
      </div>
    </div>
  );
}
