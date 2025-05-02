import React from 'react'
import IContext from '@/types/Context/IContext'
import ILayoutContextAction from '@/types/Context/Layout/LayoutContextAction'
import ILayoutContextState from '@/types/Context/Layout/LayoutContextState'
import initialState from './LayoutInitialState'

const dispatch:React.Dispatch<ILayoutContextAction> = () => {}

const LayoutContext = React.createContext<IContext<ILayoutContextState>>({state:initialState, dispatch: dispatch})

export default LayoutContext