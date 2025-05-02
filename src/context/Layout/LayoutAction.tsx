import ILayoutContextAction from "@/types/Context/Layout/LayoutContextAction";
import ILayoutContextState from "@/types/Context/Layout/LayoutContextState";

export enum actionType {
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
}

export const setErrorMessage = (currentState: ILayoutContextState, payload: string | null): ILayoutContextAction => {
  return {
    type: actionType.SET_ERROR_MESSAGE,
    payload: {
      ...currentState,
      errorMessage: payload,
    },
  } as ILayoutContextAction;
};