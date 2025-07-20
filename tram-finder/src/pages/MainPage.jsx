import React, { useState } from "react";
import TreeView from "../components/TreeView";
import { roimaData, winbusData, soveliaData } from "../data/data";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showRoima, setShowRoima] = useState(true);
  const [showWinbus, setShowWinbus] = useState(true);
  const [showSovelia, setShowSovelia] = useState(true);

  return (
    <div
      className="p-6 text-center min-h-screen bg-no-repeat bg-bottom bg-contain"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h1 className="text-3xl font-bold mb-6">Skoda App</h1>

      {/* Кнопки переключения */}
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
        <button
          onClick={() => setShowSovelia(prev => !prev)}
          className={`px-4 py-2 rounded ${showSovelia ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Sovelia
        </button>
      </div>

      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Etsi komponenttia..."
        className="border-2 border-blue-400 rounded-md px-4 py-2 w-full max-w-lg mb-6"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Три списка (Roima, Winbus, Sovelia) в одной линии */}
      <div className="flex flex-wrap justify-center gap-6">
        {showRoima && (
          <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center">
            <h2 className="font-bold text-lg mb-4 text-center">Roima</h2>
            <div className="w-full text-left">
              <TreeView data={roimaData} searchTerm={searchTerm} />
            </div>
          </div>
        )}

        {showWinbus && (
          <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center">
            <h2 className="font-bold text-lg mb-4 text-center">Winbus</h2>
            <div className="w-full text-left">
              <TreeView data={winbusData} searchTerm={searchTerm} />
            </div>
          </div>
        )}

        {showSovelia && (
          <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center">
            <h2 className="font-bold text-lg mb-4 text-center">Sovelia</h2>
            <div className="w-full text-left">
              <TreeView data={soveliaData} searchTerm={searchTerm} isSovelia />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
