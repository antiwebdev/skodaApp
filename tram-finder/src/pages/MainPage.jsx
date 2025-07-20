import React from "react";
import TreeView from "../components/TreeView";
import data from "../data/data";

export default function MainPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Roima</h1>
      <TreeView data={data.roima} />

      <h1 className="text-2xl font-bold mt-8 mb-4">Winbus</h1>
      <TreeView data={data.winbus} />
    </div>
  );
}
