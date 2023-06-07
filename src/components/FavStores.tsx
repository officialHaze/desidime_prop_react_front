import "../styles/FavStores.css";

interface Props {
  username: string | undefined;
}

function FavStores({ username }: Props) {
  return (
    <div className="fav-store-container">
      <div className="users-name">{`${username}'s Favourite Stores`}</div>
      <div className="list-of-fav-stores">No Favourite Stores</div>
    </div>
  );
}

export default FavStores;
