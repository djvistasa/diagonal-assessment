import { useContext } from 'react';
import { AppContext } from '.';
import { IAppContextState } from './types';

export const useAppContext = (): IAppContextState => useContext(AppContext);
