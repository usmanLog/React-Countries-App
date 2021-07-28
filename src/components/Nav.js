import React from "react";

export function Nav() {
  return (
    <nav className="w-full h-auto bg-white border-b border-gray-200 flex items-center justify-between px-6 py-2">
      <h1 className="text-xl font-semibold">Where in the World?</h1>
      <button className="bg-blue-500 p-2 rounded text-white">Dark Mode</button>
    </nav>
  );
}
