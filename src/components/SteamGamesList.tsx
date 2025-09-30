import { useEffect, useState } from "react";
import PageHeading from "./PageHeading";

type Game = {
  gameName: string;
  playTime: number;
  logoUrlId: string;
};

const SteamGamesList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/steam/info`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.games);
      })
      .catch((error) => {
        console.error("Error fetching Steam games:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageHeading>Recently Played Games</PageHeading>
      <div className="p-8">
        {loading ? (
          <>
            <div className="flex justify-center items-center h-32">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
            <div className="flex justify-center items-center text-center h-32">
              The server was sleeping. Please wait while it wakes up.
            </div>
          </>
        ) : games && games.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game, index) => (
              <div
                key={index}
                className="w-full max-w-sm mx-auto p-4 bg-gradient-to-r from-[#4682B4] to-[#0F4C81] text-white rounded-lg shadow-lg transform -skew-x-6 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={game.logoUrlId}
                  alt={game.gameName}
                  className="w-10 h-10 object-contain rounded mb-4 skew-x-6"
                />
                <h3
                  className="text-xl font-bold skew-x-6"
                  style={{ fontSize: "clamp(0.75rem, 2.5vw, 1rem)" }}
                >
                  {game.gameName}
                </h3>
                <p className="text-sm skew-x-6">
                  Playtime: {Math.round(game.playTime / 60)} hrs
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>
            No games found. Note: The info retrieval on this page is rate
            limited.
          </p>
        )}
      </div>
    </>
  );
};

export default SteamGamesList;
