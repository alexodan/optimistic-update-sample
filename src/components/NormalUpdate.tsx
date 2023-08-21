import { ItemList } from "./ItemList";
import { useFetch } from "../hooks/useFetch";
import { useUpdate } from "../hooks/useUpdate";

export const NormalUpdate = () => {
  const { mutate } = useUpdate();
  const { data } = useFetch();

  return (
    <div>
      <ItemList
        items={data || []}
        onClick={({ item }) => {
          mutate({
            ...item,
          });
        }}
      />
    </div>
  );
};
