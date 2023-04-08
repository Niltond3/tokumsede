import { RequestType, InitialStateType } from "./context";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};


export enum Types {
  create = 'CREATE_REQUEST',
  delete = 'DELETE_REQUEST',
}

type RequestPayload = {
  [Types.create] : RequestType;
  [Types.delete] : {id: number};
}

export type RequestActions = ActionMap<RequestPayload>[keyof ActionMap<RequestPayload>];

export const requestReducer:React.Reducer<InitialStateType,RequestActions> = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':{return state}
    case 'DELETE_REQUEST':{return state}
    default:{return state}
  }
}
/**
 * When create a request: Add a new request in array of requests, and a new id inside array of column
 */
