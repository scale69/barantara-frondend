"use client";
import React from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "next-view-transitions";
import { MenuitemsUrl } from "./linkMenus";

export default function MenuBrowser() {
  const onClick: MenuProps["onClick"] = (e) => {};
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{}}
        mode="horizontal"
        items={MenuitemsUrl}
        className="shadow-none hidden md:flex border  w-full lg:w-[1000px] h-full rounded-lg"
      />
    </div>
  );
}
