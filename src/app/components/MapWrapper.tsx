
"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("./LeafletMap"),
  { 
    ssr: false,
    loading: () => <p className="text-center">Loading map...</p>
  }
);

export default function MapWrapper() {
  return <LeafletMap />;
}