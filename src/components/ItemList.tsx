import type { Item } from "../types/item";
import { listStyle, listItemStyle, favoriteButtonStyle } from "../const/styles";

export const ItemList = ({
  items,
  onClick,
}: {
  items: Item[];
  onClick: ({ item }: { item: Item }) => void;
}) => {
  return (
    <div>
      {!!items.length && (
        <ul style={listStyle}>
          {items.map((item) => (
            <li key={item.id} style={listItemStyle}>
              <span>{item.name}</span>
              <button
                style={{
                  ...favoriteButtonStyle,
                  background: item.isFavorite ? "#e11d48" : "#fff",
                  color: item.isFavorite ? "#fff" : "#000",
                }}
                onClick={() => onClick({ item })}
              >
                {item.isFavorite
                  ? "Remove from Favorites"
                  : "Add to Favourites"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
