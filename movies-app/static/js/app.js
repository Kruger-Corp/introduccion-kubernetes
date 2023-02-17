const game1 = {
  id: 1,
  name: 'Call of Dutty',
  views: '20k',
  description: 'Una descripción del Juego',
  cover: 'aa.jpg',
  players: [
    { photo: 'a.jpg' }
  ]
};

function App() {
  return <Layout />;
}

function Layout() {
  return (
    <div>
      <div>
        <div>
          <NavGames games={[game1, game1]}/>
        </div>
        <main>
          <Game game={game1} />
        </main>
      </div>
    </div>
  );
}

function NavGames({games}) {
  return (
    <nav>
      <h2>Lista de juegos</h2>
      <ul>
        {
          games.map(game => (
            <li>
              <ItemGame game={game}/>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

function ItemGame({game}) {
  return (
    <article>
      <div>
        <figure>
          <img src={game.cover} />
        </figure>
      </div>
      <div>
        <h3>{game.name}</h3>
        <p>{game.views}</p>
      </div>
    </article>
  )
}

function Game({game}) {
  return (
    <section>
      <h1>{game.name}</h1>
      <figure>
        <img/>
      </figure>
      <div>
        <span>Jugadores</span>
      </div>
      <div>
        {game.description}
      </div>
    </section>
  );
}

function Player({player}) {
  return (
    <div>
      <img src={player.photo}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
