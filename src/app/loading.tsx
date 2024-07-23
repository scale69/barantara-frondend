import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="flex justify-center items-center bg-slate-100 w-full h-screen">
      <Spin />
    </div>
  );
}
