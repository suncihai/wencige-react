import { ActionType, createReducer } from 'typesafe-actions';
import * as appActions from '../actions';

export interface IPostItem {
  author: string;
  imageUrl: string;
  postDate: string;
  postid: string;
  text: string;
  title: string;
}

const initState: IPostItem[] = []

export const postsReducer = createReducer<
  IPostItem[],
  ActionType<typeof appActions>
>(initState);
