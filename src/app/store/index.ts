import { store } from './store.ts'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
