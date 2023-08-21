import { useMutation } from 'react-query';
import { update } from '../api/mock';
import { queryClient } from '../const/queryClient';
import type { Item } from '../types/item';

export const useOptimisticUpdate = () => {
  return useMutation({
    mutationFn: update,
    onMutate: async (item: Item) => {
      await queryClient.cancelQueries('favorites');
      const previousFavorites = queryClient.getQueryData('favorites');
      queryClient.setQueryData('favorites', (old: Item[]) =>
        old.map((i) =>
          i.id === item.id
            ? {
                ...item,
                isFavorite: !item.isFavorite,
              }
            : i
        )
      );
      return { previousFavorites };
    },
    onError: (context: { previousFavorites: Item[] }) => {
      queryClient.setQueryData('favorites', context.previousFavorites);
    },
    onSettled: () => {
      queryClient.invalidateQueries('favorites');
    },
  });
};
