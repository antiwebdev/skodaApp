import React, { useState } from "react";
import TreeView from "../components/TreeView";
import { roimaData, winbusData } from "../data/data"; // адаптируй, если другой импорт

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showRoima, setShowRoima] = useState(true);
  const [showWinbus, setShowWinbus] = useState(true);

  return (
    <div className="p-6 text-center bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Raitiovaunun osahaku</h1>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setShowRoima(prev => !prev)}
          className={`px-4 py-2 rounded ${showRoima ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Roima
        </button>
        <button
          onClick={() => setShowWinbus(prev => !prev)}
          className={`px-4 py-2 rounded ${showWinbus ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Winbus
        </button>
      </div>

      <input
        type="text"
        placeholder="Etsi komponenttia..."
        className="border-2 border-blue-400 rounded-md px-4 py-2 w-full max-w-lg mb-6"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showRoima && (
          <div className="bg-white p-4 rounded shadow text-left">
            <h2 className="font-bold text-lg mb-2">Roima</h2>
            <TreeView data={roimaData} searchTerm={searchTerm} />
          </div>
        )}
        {showWinbus && (
          <div className="bg-white p-4 rounded shadow text-left">
            <h2 className="font-bold text-lg mb-2">Winbus</h2>
            <TreeView data={winbusData} searchTerm={searchTerm} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
