/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface IContext<T> {
    state: T
    dispatch: React.Dispatch<any>
}
