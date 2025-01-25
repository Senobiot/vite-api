import GameTile from "../GameTile/GameTile";
import { useSelector } from "react-redux";
import { getGameCollection } from "../../selectors/selectors";
import { Link } from "react-router-dom";

export default function Home() {
  const collection = useSelector(getGameCollection);
console.log(collection)
  return (
    <div
      className="my-games-wrapper"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: 'left' }}
    >
      {!collection.length
        ? "Your collection is still empty... ("
        : collection.map((game) => {
            return (
              <Link
                key={game.id}
                to={{
                  pathname: "/card",
                  search: `?id=${game.id}`,
                }}
                style={{ display: "flex", width: "25%" }}
              >
                <GameTile
                  key={game.name}
                  image={game.image.medium_url}
                  title={game.name}
                ></GameTile>
              </Link>
            );
          })}
    </div>
  );
}
