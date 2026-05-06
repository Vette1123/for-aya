"use client";

import dynamic from "next/dynamic";

const Petals = dynamic(() => import("@/components/Petals"), { ssr: false });
const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

export default function ClientFx() {
  return (
    <>
      <Petals count={20} />
      <Cursor />
    </>
  );
}
