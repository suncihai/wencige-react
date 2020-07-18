import rootReducer from "../reducers/index"
import { StateType } from "typesafe-actions";

export type IState = StateType<typeof rootReducer>;
