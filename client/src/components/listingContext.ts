import { createContext } from 'react';
import { Product } from './interfaces';

export const allListings = createContext<Array<Product>>([]);