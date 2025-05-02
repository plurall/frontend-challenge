import ILayoutContextState from "./LayoutContextState"

export default interface ILayoutContextAction {
    type: string;
    payload: ILayoutContextState
};