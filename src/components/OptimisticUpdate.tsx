import { ItemList } from "./ItemList";
import { useFetch } from "../hooks/useFetch";
import { useOptimisticUpdate } from "../hooks/useOptimisticUpdate";

export const OptimisticUpdate = () => {
  const { mutate } = useOptimisticUpdate();
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
