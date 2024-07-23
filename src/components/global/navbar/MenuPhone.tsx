"use client";
import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "next-view-transitions";
import { MenuitemsUrl } from "./linkMenus";

export default function MenuPhone() {
  const onClick: MenuProps["onClick"] = (e) => {};
  return (
    <div className="w-full">
      <Menu
        onClick={onClick}
        style={{}}
        mode="inline"
        items={MenuitemsUrl}
        className="shadow-none  border h-full rounded-lg"
      />
    </div>
  );
}
