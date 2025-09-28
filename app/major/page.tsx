import React from "react";
import Menubar from "@/components/Menubar";
import Sidebar from "@/components/sidebar";
import { Itim, Bungee } from "next/font/google";

const kanit = Itim({
  subsets: ["thai"],
  weight: ["400"],
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <Menubar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-6">
          <h1 className={`${kanit.className} text-2xl font-bold`}>
            ยินดีต้อนรับสู่หน้าสาขาวิชา
          </h1>
          <p className={`${bungee.className} mt-4`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            dolor voluptas dignissimos vel architecto nihil nostrum dolorem ab
            porro optio.
          </p>
        </main>
      </div>
    </div>
  );
}
