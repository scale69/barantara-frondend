import { MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

export const MenuitemsUrl: MenuItem[] = [
  {
    key: "01",
    type: "item",
    label: <Link href={"/"}>Home</Link>,
  },
  {
    key: "sub1",
    label: "SULTRA",
    // icon: <MailOutlined />,
    children: [
      {
        key: "001",
        type: "item",
        label: <Link href={"/sulawesi-tenggara"}>Lihat Semua</Link>,
      },
      {
        key: "g1",
        label: "Daratan",
        type: "group",
        children: [
          {
            key: "1",
            label: <Link href={"/sulawesi-tenggara/kendari"}>Kendari</Link>,
          },
          {
            key: "2",
            label: <Link href={"/sulawesi-tenggara/konawe"}>Konawe</Link>,
          },
          {
            key: "3",
            label: <Link href={"/sulawesi-tenggara/kolaka"}>Kolaka</Link>,
          },
        ],
      },
      {
        key: "g2",
        label: "Kepulauan",
        type: "group",
        children: [
          {
            key: "4",
            label: (
              <Link href={"/sulawesi-tenggara/muna-dan-muna-barat"}>
                Muna & Muna Barat
              </Link>
            ),
          },
          {
            key: "5",
            label: <Link href={"/sulawesi-tenggara/baubau"}>Baubau</Link>,
          },
          {
            key: "6",
            label: (
              <Link href={"/sulawesi-tenggara/kepulauan-buton"}>
                Kepulauan Buton
              </Link>
            ),
          },
        ],
      },
    ],
  },
  {
    key: "7",
    type: "item",
    label: <Link href={"/ekonomi"}>Ekonomi</Link>,
  },
  {
    key: "sub4",
    label: "Hukum & Politik",
    // icon: <SettingOutlined />,
    children: [
      {
        key: "8",
        label: <Link href={"/hukum-dan-politik/hukum"}>Hukum</Link>,
      },
      {
        key: "9",
        label: <Link href={"/hukum-dan-politik/politik"}>Politik</Link>,
      },
    ],
  },
  {
    key: "10",
    type: "item",
    label: <Link href={"/olahraga"}>Olahraga</Link>,
  },
  {
    key: "11",
    type: "item",
    label: <Link href={"/nasional"}>Nasional</Link>,
  },
  {
    key: "12",
    type: "item",
    label: <Link href={"/hiburan-dan-lifestyle"}>Hiburan & Life Style</Link>,
  },
  {
    key: "13",
    type: "item",
    label: <Link href={"/artikel-dan-advertorial"}>Artikel & ADV</Link>,
  },
  {
    key: "14",
    type: "item",
    label: <Link href={"/tentang-kami"}>Tentang Kami</Link>,
  },
];
