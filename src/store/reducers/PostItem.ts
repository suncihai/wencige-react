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

export interface IPosts {
  posts: IPostItem[];
}

const initState: IPosts = {
  posts: [],
};

export const postsReducer = createReducer<
  IPosts,
  ActionType<typeof appActions>
>(initState);
