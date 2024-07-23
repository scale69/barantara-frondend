"use client";
import { Button, Drawer, Space } from "antd";
import type { DrawerProps } from "antd";
import { useState } from "react";
import MenuPhone from "./MenuPhone";
import { MenuFoldOutlined } from "@ant-design/icons";
export default function DrawerNav() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button onClick={showDefaultDrawer}>
          <MenuFoldOutlined />
        </Button>
      </Space>
      <Drawer placement="right" size={size} onClose={onClose} open={open}>
        <MenuPhone />
      </Drawer>
    </>
  );
}
