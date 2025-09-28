import { promises } from "dns";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Student ID : {id}</h1>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        illo.
      </p>
    </div>
  );
}
