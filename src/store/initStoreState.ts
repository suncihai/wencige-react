import { DeepPartial } from 'redux';
import { IState } from './types/IState';

export const getInitStoreState = (): DeepPartial<IState> => ({
  count: 0,
  isBuyer: false,
});
