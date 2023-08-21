import { useMutation } from 'react-query';
import { update } from '../api/mock';
import { queryClient } from '../const/queryClient';

export const useUpdate = () => {
  return useMutation({
    mutationFn: update,
    onMutate: async () => {
      await queryClient.cancelQueries('favorites');
    },
    onSettled: () => {
      queryClient.invalidateQueries('favorites');
    },
  });
};
