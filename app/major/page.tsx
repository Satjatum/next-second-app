import React from "react";
import Menubar from "@/components/Menubar";
import Sidebar from "@/components/sidebar";
export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <Menubar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-6">
          <h1 className="text-2xl font-bold">ยินดีต้อนรับสู่หน้าสาขาวิชา</h1>
          <p className="mt-4">
            นี่คือเนื้อหาหลักที่คุณสามารถใส่ข้อมูลเพิ่มเติมได้ เช่น รายชื่อสาขา
            รายละเอียด หรือปุ่มต่าง ๆ
          </p>
        </main>
      </div>
    </div>
  );
}
