import { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

const Home = () => {
  // 1. Declaración de Estados en Inglés
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // IMPORTANTE: Reemplazar con la llave real de RAWG en clase
    const API_KEY = '0d9a691a81334a199a1d3755e60d290a';

    // 2. Función asíncrona nombrada convencionalmente
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('No se pudieron cargar los juegos');
        }

        const data = await response.json();
        setGames(data.results); // Guardamos los resultados
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // Apagamos el estado de carga
      }
    };

    fetchGames();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar

  // 3. Renderizado condicional basado en los estados
  if (isLoading) {
    return (
      <div className="container">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#ff0000',
            textShadow: '0 0 10px #ff0000, 0 0 20px #8b0000'
          }}
        >
          Cargando juegos... ⏳
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#ff0000',
            textShadow: '0 0 10px #ff0000, 0 0 20px #8b0000'
          }}
        >
          Error: {error} ❌
        </h2>
      </div>
    );
  }

  // 4. Renderizado principal
  return (
    <div className="container">
      <h2 className="title">Juegos Populares</h2>

      <div className="games-grid">
        {/* Iteramos sobre el arreglo 'games' */}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
