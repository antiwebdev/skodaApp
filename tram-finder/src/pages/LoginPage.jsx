import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      onLogin(); // Успешный логин
    } else {
      setError("Väärä käyttäjänimi tai salasana"); // "Неверный логин или пароль"
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Kirjaudu sisään</h1>
        <input
          className="w-full p-2 mb-2 border rounded"
          placeholder="Käyttäjänimi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-2 border rounded"
          placeholder="Salasana"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 mb-2 text-sm">{error}</div>}
        <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">
          Kirjaudu
        </button>
      </form>
    </div>
  );
}