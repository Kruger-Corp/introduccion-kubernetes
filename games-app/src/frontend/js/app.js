function App() {
  return <Layout />;
}

function Layout() {
  const [games, setGames] = React.useState([]);
  const [itemSelected, setItemSelected] = React.useState(null);

  async function getGames() {
    const result = await fetch('//localhost:3000/games')
    const list = await result.json();
    setGames(list);
  }

  React.useEffect(() => {
    getGames();
  }, []);

  function selectItemHandler(item) {
    setItemSelected(item);
  }

  return (
    <div className="w-full h-screen grid grid-cols-3 2xl:grid-cols-5 p-6">
      <div>
        <NavGames games={games} onSelectItem={selectItemHandler} />
      </div>
      <main className="col-span-2 2xl:col-span-4">
        {
          itemSelected && <Game game={itemSelected} />
        }
      </main>
    </div>
  );
}

function NavGames({games, onSelectItem}) {
  return (
    <nav className="pr-10">
      <h2 className="text-primary border-b-2 border-primary mb-4 font-semibold">Lista de juegos</h2>
      <ul>
        {
          games.map(game => (
            <li className="mb-3">
              <ItemGame game={game} onClick={onSelectItem}/>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

function ItemGame({game, onClick}) {
  return (
    <article className="flex gap-2 cursor-pointer" onClick={() => onClick(game)}>
      <div>
        <figure>
          <img className="w-20 h-20 object-cover rounded-2xl" src={`images/${game.cover}`} />
        </figure>
      </div>
      <div>
        <h3>{game.name}</h3>
        <p className="text-sm text-secondary">{game.views} views</p>
      </div>
    </article>
  )
}

function Game({game}) {
  return (
    <section>
      <h1 className="font-bold text-center text-3xl mb-4 text-secondary">{game.name}</h1>
      <figure className="h-72 mb-4">
        <img className="w-full h-full object-cover rounded-2xl" src={`images/${game.cover}`}/>
      </figure>
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
