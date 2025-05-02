import ILayoutContextAction from "@/types/Context/Layout/LayoutContextAction";
import ILayoutContextState from "@/types/Context/Layout/LayoutContextState";
import { actionType } from "./LayoutAction";

const LayoutReducer = (state: ILayoutContextState, action: ILayoutContextAction): ILayoutContextState => {
  switch (action.type) {
    case actionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
}

export default LayoutReducer;