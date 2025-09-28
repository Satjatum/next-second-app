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
          <h1 className="text-2xl font-bold">Account</h1>
        </main>
      </div>
    </div>
  );
}
