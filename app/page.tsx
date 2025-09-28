//rfc สร้าง function Component ทั้วๆไป
//np Snippet สร้าง Page Component

import React from "react";
import Menubar from "@/components/Menubar";

export default function Page() {
  return (
    <div>
      <Menubar />
      <h1 className="text-center">Welcome To DTI</h1>
      <h2 className="text-center text-green-800 font-bold">
        Satjatum Kaosawang{" "}
      </h2>
      <hr />
      <p className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        sequi asperiores necessitatibus saepe repellendus, cupiditate pariatur
        suscipit impedit placeat illo!
      </p>
    </div>
  );
}
