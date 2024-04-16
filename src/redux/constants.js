import storage from 'redux-persist/lib/storage';

export const appInitState = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const contactsPersistConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};

export const formikInitialValues = {
  username: '',
  phone: '',
};
