import { useQuery } from "react-query";
import { fetch } from "../api/mock";

export const useFetch = () => {
  const queryConfig = {
    refetchOnWindowFocus: false,
    retry: false,
    cacheTime: 0,
    queryKey: "favorites",
    keepDefaultValues: true,
    queryFn: () => fetch(),
  };
  return useQuery(queryConfig);
};
