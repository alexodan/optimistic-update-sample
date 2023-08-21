import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { Item } from '../types/item';

import { ITEMS } from '../const/item';

let currentData = [...ITEMS];

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet('/favorites').reply(200, {});
mock.onPost('/favorite').reply(200, {});

export const fetch = async () => {
  await axios.get('/favorites');
  return currentData;
};

export const update = async (item: Item) => {
  await axios.post('/favorite');
  // dummy response
  if (item.id === 5) {
    throw new Error();
  }
  const res = {
    ...item,
    isFavorite: !item.isFavorite,
  };
  currentData = currentData.map((c) => (c.id === item.id ? res : c));
  return res;
};
