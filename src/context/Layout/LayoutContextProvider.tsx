import { useReducer } from "react";
import LayoutReducer from "./LayoutReducer";
import initialState from "./LayoutInitialState";
import LayoutContext from "./LayoutContext";

type TProps = {
  children: React.ReactNode
}

const LayoutContextProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(LayoutReducer, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContextProvider;