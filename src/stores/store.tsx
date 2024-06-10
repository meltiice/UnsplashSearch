import {createContext} from 'react'
import LoadingStore from './loading-store';
import PicturesStore from './pictures-store';
import { useContext } from 'react';

export const store = {
    picturesStore: PicturesStore,
    loadingStore: LoadingStore,
}

export const StoreContext = createContext(store);
export function useStore() {
    return useContext(StoreContext)
}